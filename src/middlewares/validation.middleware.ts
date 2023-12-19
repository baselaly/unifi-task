import { plainToClass } from "class-transformer";
import { ValidationError, validate } from "class-validator";
import CustomError from "../utils/custom.error";

export default (classType: any) => {
  return (req: any, res: any, next: any) => {
    const body = plainToClass(classType, req.body);
    validate(body, { whitelist: true, forbidNonWhitelisted: true }).then(
      (errors: Array<ValidationError>) => {
        if (errors.length > 0) {
          const errorsMessages = buildError(errors);
          next(new CustomError(errorsMessages, 422));
        }
        next();
      }
    );
  };
};

function buildError(errors: ValidationError[]): string[] {
  const result: string[] = [];
  errors.forEach((el) => {
    el.constraints
      ? Object.entries(el.constraints).forEach((constraint) => {
          result.push(constraint[1]);
        })
      : "";
  });
  return result;
}

