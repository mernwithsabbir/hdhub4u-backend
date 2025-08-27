import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";

export const IMAGE_FORMATS = {
  ext: [".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"],
  mime: ["image/jpeg", "image/png", "image/gif", "image/webp", "image/avif"],
};

export const VIDEO_FORMATS = {
  ext: [".mp4", ".mkv", ".avi", ".mov"],
  mime: ["video/mp4", "video/x-matroska", "video/x-msvideo", "video/quicktime"],
};

export const IMAGE_VIDEO_FORMATS = {
  ext: [...IMAGE_FORMATS.ext, ...VIDEO_FORMATS.ext],
  mime: [...IMAGE_FORMATS.mime, ...VIDEO_FORMATS.mime],
};

const fileFilter =
  (allowedExt: string[], allowedMimeType: string[]) =>
  (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedExt.includes(ext) && !allowedMimeType.includes(file.mimetype)) {
      return cb(
        new Error(`Invalid file type!allowed File : ${allowedExt.join(", ")}`)
      );
    }
    cb(null, true);
  };

const storage = (destination: string) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/" + destination);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
      );
    },
  });

const makeUploader = (
  destination: string,
  allowedFormats: { ext: string[]; mime: string[] },
  fileSizeMb = 10
) => {
  return multer({
    storage: storage(destination),
    fileFilter: fileFilter(allowedFormats.ext, allowedFormats.mime),
    limits: { fileSize: fileSizeMb * 1024 * 1024 },
  });
};

export default makeUploader;
