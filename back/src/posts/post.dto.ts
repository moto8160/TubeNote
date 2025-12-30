import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: 'URLが未入力です。' })
  videoUrl: string;

  @IsString()
  @IsNotEmpty({ message: 'ノートが未入力です。' })
  text: string;
}

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty({ message: 'ノートが未入力です。' })
  text: string;
}
