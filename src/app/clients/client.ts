
export class ClientResponse {
  content: Client[];
  pageable: {
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    },
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export class Client {
  id?: number;
  name: string;
  lastName: string;
  cpf: string;
  city: string;
  telephone: string;
  celullar: string;
  email: string;
  date_register: string;
}


