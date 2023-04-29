export interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  acl: string;
  homeLocation: {
    lat: number;
    lng: number;
  };
}
