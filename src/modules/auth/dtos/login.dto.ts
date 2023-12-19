import { IsEmail, IsNotEmpty } from "class-validator";

export default class LoginDto {
  @IsNotEmpty({ message: "email is required" })
  @IsEmail({}, { message: "email is not valid" })
  email: string;

  @IsNotEmpty({ message: "password is required" })
  password: string;
}

