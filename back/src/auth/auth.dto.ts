import { IsBoolean, IsEmail, IsString, MinLength } from 'class-validator';

export class SignInDto {
  @IsString()
  @IsEmail({}, { message: 'メールアドレスが正しくありません' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'パスワードは６文字以上で入力してください' })
  password: string;

  @IsBoolean()
  remember: boolean;
}

export class SignInResponse {
  access_token: string;
}
