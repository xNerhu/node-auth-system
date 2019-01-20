import { isEmail } from 'validator';

export const registerSchema = {
  firstName: {
    message: 'Enter first name',
    test: value => value.length > 0,
  },
  lastName: {
    message: 'Enter last name',
    test: value => value.length > 0,
  },
  email: {
    message: 'Enter email',
    test: value => isEmail(value),
  },
  password: [
    {
      message: 'Enter a password',
      test: value => value.length > 0,
    },
    {
      message: 'Use at min 6 characters long',
      test: value => value.length >= 6,
    },
  ],
  confirmPassword: {
    message: 'Confirm password',
    test: (value, allValues) => {
      const { password } = allValues;
      return password.length < 6 || password === value;
    },
  },
};
