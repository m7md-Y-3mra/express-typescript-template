export interface Meta {
  timestamp?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
}

export type ApiResponse<T> =
  | {
      status: "success";
      message: string;
      data: T;
      meta?: Meta;
    }
  | {
      status: "error";
      message: string;
      errors?: Record<string, string>;
    };
