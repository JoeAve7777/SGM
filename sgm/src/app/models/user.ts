import { Iuser } from "../interfaces/Iuser";

export class User implements Iuser{
    id!: number;
    username!: string;
    password!: string;
    email!: string;
}
