
export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
}
export class User {
    _id: string;
    name: string;
    email: string;
    address: string;
    acl: Role;
    homeLocation: {
        lat: number;
        lng: number;
    };
}
