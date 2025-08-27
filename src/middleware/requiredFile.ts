import { Request, Response, NextFunction } from "express";

/**
 * Ensure file(s) are uploaded for given field(s).
 *
 * Usage:
 *   - single("avatar")   -> requireFile("avatar")
 *   - array("photos")    -> requireFile("photos")
 *   - fields([{ name: "avatar" }, { name: "cover" }])
 *                        -> requireFile(["avatar", "cover"])
 */
export const requireFile = (fields: string | string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const fieldList = Array.isArray(fields) ? fields : [fields];

    // single upload -> req.file
    if (req.file) {
      return next();
    }

    // array upload -> req.files is array
    if (Array.isArray(req.files)) {
      if (req.files.length === 0) {
        return res.status(400).json({
          success: false,
          errorType: "noFile",
          message: `Field '${fieldList[0]}' requires at least one file.`,
        });
      }
      return next();
    }

    // fields upload -> req.files is object { field: File[] }
    if (req.files && typeof req.files === "object") {
      const filesObj = req.files as Record<string, Express.Multer.File[]>;

      for (const field of fieldList) {
        if (!filesObj[field] || filesObj[field].length === 0) {
          return res.status(400).json({
            success: false,
            errorType: "noFile",
            message: `Field '${field}' is required. Please attach file(s).`,
          });
        }
      }
      return next();
    }

    // If nothing matched (no files at all)
    return res.status(400).json({
      success: false,
      errorType: "noFile",
      message: `No files uploaded. Required: ${fieldList.join(", ")}`,
    });
  };
};
