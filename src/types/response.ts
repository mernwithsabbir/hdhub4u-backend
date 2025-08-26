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
      | "compare"
      | "invalid"
      | "noToken"
      | "others";
    message: string;
    data?: unknown;
    token?: string;
  };
}
