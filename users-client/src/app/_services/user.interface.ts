
export enum ACL {
  USER = "USER",
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
}
export interface User {
  _id?: number;
  name: string;
  email: string;
  address: string;
  acl: string;
  homeLocation: {
    lat: number;
    lng: number;
  };
}
