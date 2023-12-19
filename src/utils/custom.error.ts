export default class CustomError extends Error {
  public errors: string | string[];
  public statusCode: number;

  constructor(errors: string | string[], statusCode: number) {
    super();

    this.errors = errors;
    this.statusCode = statusCode;
  }
}

