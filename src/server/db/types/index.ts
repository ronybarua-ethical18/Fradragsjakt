// for api response
export type ApiResponse<T> = {
  success?: boolean;
  data?: T;
  message: string;
  alreadyVerified?: boolean;
  status?: number;
};

export type ApiErrorResponse = {
  success: false;
  message: string;
};
