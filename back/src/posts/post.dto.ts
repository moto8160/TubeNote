import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: 'URLが未入力です。' })
  videoUrl: string;

  @IsString()
  @IsNotEmpty({ message: 'ノートが未入力です。' })
  text: string;

  @IsNotEmpty()
  status: 'public' | 'private';
}

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty({ message: 'ノートが未入力です。' })
  text: string;

  @IsNotEmpty()
  status: 'public' | 'private';
}
