import {
  IFormInputs,
  IFormErrors,
  IValidationSchema,
  IValidationItem,
  IFormValues,
} from '@shared/interfaces';

export default class Form {
  public inputs: IFormInputs = {};

  public validationSchema: IValidationSchema;

  constructor(schema?: IValidationSchema) {
    this.validationSchema = schema;
  }

  public bind = (key: string) => (r: HTMLInputElement) => {
    this.inputs[key] = r;
  };

  public getValues() {
    const values: IFormValues = {};
    for (const key in this.inputs) {
      values[key] = this.inputs[key].value.trim();
    }
    return values;
  }

  public validate(validationSchema?: IValidationSchema) {
    const schema = validationSchema || this.validationSchema;
    const values = this.getValues();
    const errors: IFormErrors = {};

    for (const key in schema) {
      if (schema[key] instanceof Array) {
        for (const el of schema[key] as IValidationItem[]) {
          const item = el;
          if (!item.test(values[key], values)) {
            errors[key] = item.message;
            break;
          }
        }
      } else {
        const item = schema[key] as IValidationItem;
        if (!item.test(values[key], values)) {
          errors[key] = item.message;
        }
      }
    }

    return errors;
  }
}
