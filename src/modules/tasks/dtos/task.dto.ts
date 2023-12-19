import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export default class TaskDto {
  @IsNotEmpty({ message: "title is required" })
  @MinLength(5, { message: "title cant be lessthan 5 chars" })
  @MaxLength(10, { message: "title cant be morethan 10 chars" })
  title: string;

  @IsNotEmpty({ message: "description is required" })
  @MaxLength(500, { message: "description cant be morethan 500 chars" })
  description: string;
}

