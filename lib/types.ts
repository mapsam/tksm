export interface Person {
  firstname: string|null;
  lastname: string|null;
  attendingFriday: string;
  attendingSaturday: string;
  attendingSunday: string;
}

export type APIPostBody = {
  people: Array<Person>,
  email: string,
  phone?: string,
  restrictions?: string|null,
  accommodations?: string|null,
  words?: string|null
};

export type APIErrors = Array<string>;
export interface APIResponse {
  data: APIPostBody;
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

export interface Goals {
  HONEYMOON: number,
  HOUSE: number,
  PAWS: number
}

export interface APIRegistryPostBody {
  name: string;
  item: 'HONEYMOON' | 'HOUSE' | 'PAWS';
  amount: number;
  method: 'venmo' | 'paypal' | 'zelle' | 'checkcash';
}

export interface APIRegistryResponse {
  data: APIRegistryPostBody;
  errors?: APIErrors;
}