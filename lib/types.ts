export interface APIPostRequest {
  firstname?: string;
  lastname?: string;
  attending?: boolean;
  email?: string;
}

export type APIErrors = Array<string>;

export interface APIResponse {
  data?: APIPostRequest;
  errors?: APIErrors;
}