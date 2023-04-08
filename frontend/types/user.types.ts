import { DateISO, ID } from './global.types';
export type TUser = {
  _id: ID;
  fullname: string,
  username: string,
  email: string,
  phone_number: string;
  createdAt: DateISO;
  updatedAt: DateISO;
};
