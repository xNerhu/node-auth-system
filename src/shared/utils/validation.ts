import {
  IValidationSchema,
  IValidationErrors,
  IValidationItem,
} from '@shared/interfaces';

const getError = async (item: IValidationItem) => {
  const { message, test } = item;
  if (
    (typeof test === 'function' && !(await test())) ||
    (typeof test === 'boolean' && !test)
  ) {
    return message;
  }
  return null;
};

export const validate = async (schema: IValidationSchema) => {
  const errors: IValidationErrors = {};
  for (const key in schema) {
    if (schema[key] instanceof Array) {
      for (const item of schema[key] as IValidationItem[]) {
        errors[key] = await getError(item);
        if (errors[key]) break;
      }
    } else {
      errors[key] = await getError(schema[key] as IValidationItem);
    }
  }
  return errors;
};
