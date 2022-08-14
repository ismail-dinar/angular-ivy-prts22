import { ROUTES_PATHS } from './routes-paths';

export interface IChallenge {
  name: string;
  displayOrder: number;
  route: ROUTES_PATHS;
}


export interface IUser {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
  age: number;
}

export interface IFood {
  id: number;
  uid: string;
  dish: string;
  description: string;
  ingredient: string;
  measureme,t: string;
}