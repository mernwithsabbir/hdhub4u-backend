export interface IResponse {
  status: number;
  json: {
    success: boolean;
    errorType?:
      | "dto"
      | "exist"
      | "server"
      | "multer"
      | "LIMIT_FILE_SIZE"
      | "validation"
      | "create"
      | "others";
    message: string;
    data?: unknown;
  };
}
