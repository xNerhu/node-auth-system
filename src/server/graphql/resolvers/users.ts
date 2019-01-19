import { UserModel } from '@server/models/user';

export const getUsers = async () => {
  return await UserModel.find();
};
