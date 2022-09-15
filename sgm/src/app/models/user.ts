import { Iuser } from "../interfaces/IUser";

export class User implements Iuser{
    id!: number;
    username!: string;
    password!: string;
    email!: string;
}
