import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  emailVerified: boolean;
  password: string;
  description: string;
  createdAt: Date;
}
