// for api response
export type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  message: string;
  alreadyVerified?: boolean;
  status?: number;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type ApiErrorResponse = {
  success: false;
  message: string;
};
