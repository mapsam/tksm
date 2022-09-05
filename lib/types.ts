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

export interface LocationItem {
  name: string,
  group: string,
  neighborhood: string,
  link: string,
  address: string
  description: string,
  lng?: number,
  lat?: number,
  time?: string,
  maps?: string
}