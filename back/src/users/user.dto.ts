import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'ユーザーネームが未入力です。' })
  name: string;

  @IsEmail({}, { message: 'メールアドレスが正しくありません。' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'パスワードは６文字以上で入力してください。' })
  password: string;

  passwordConfirm: string;
}
