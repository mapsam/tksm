export interface Person {
  firstname: string|null;
  lastname: string|null;
  attending: boolean;
  email: string|null;
}

export type APIPostBody = Array<Person>;
export type APIErrors = Array<string>;
export interface APIResponse {
  data?: APIPostBody;
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