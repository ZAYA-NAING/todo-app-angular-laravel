export interface PaginationMetaData {
  total: number;
  current_page: number;
  per_page: number;
  last_page: number;
  from: number;
  to: number;
}

export interface ApiResponse<T> {
  data: T;
  meta?: PaginationMetaData;
  message?: {
    title: string;
    body?: string;
  };
  result?: boolean;
  errors?: {
    [name: string]: any;
  };
}
