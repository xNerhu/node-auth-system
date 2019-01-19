export interface IValidationItem {
  message: string;
  test: (() => boolean | Promise<boolean>) | boolean;
}
