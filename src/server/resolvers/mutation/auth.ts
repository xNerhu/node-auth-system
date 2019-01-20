import { UserInputError } from 'apollo-server-core';
import { isEmail } from 'validator';
import { hash } from 'bcrypt';

import { UserModel } from '@server/models';
import { IUser } from '@server/interfaces';
import { validate } from '@server/utils';

interface IArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  description: string;
}

export default {
  async register(
    parent,
    { firstName, lastName, email, password, description }: IArgs,
  ) {
    firstName = firstName.trim();
    lastName = lastName.trim();
    password = password.trim();
    email = email.trim().toLowerCase();
    if (description) description = description.trim();

    const errors = await validate([
      {
        message: 'Username must be at minimum 4 characters long.',
        test: firstName.length >= 4,
      },
      {
        message: 'Incorrect email.',
        test: isEmail(email),
      },
      {
        message: 'Password must be at minimum 6 characters long.',
        test: password.length >= 6,
      },
      {
        message: 'User already exists.',
        test: async () => {
          return !(await UserModel.findOne({ email }));
        },
      },
    ]);

    if (errors.length) {
      throw new UserInputError('Failed to register.', {
        validationErrors: errors,
      });
    }

    const hashedPassword = await hash(password, 1);
    const data = <IUser>{
      firstName,
      lastName,
      email,
      emailVerified: false,
      password: hashedPassword,
      description,
      createdAt: new Date(),
    };

    const user = await UserModel.create(data);
    return { ...data, ...{ _id: user._id, password: null } };
  },
};
