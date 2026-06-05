export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface HealthCheckResponse {
  status: string;
  message: string;
  timestamp: string;
  uptime: number;
}
