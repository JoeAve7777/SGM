import { Iserver } from '../interfaces/Iserver';

export class Server implements Iserver {
  id!: number;
  name!: string;
  status!: string;
}
