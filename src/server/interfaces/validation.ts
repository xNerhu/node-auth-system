export interface IValidationItem {
  message: string;
  test: () => any;
  errorType?: any;
}
