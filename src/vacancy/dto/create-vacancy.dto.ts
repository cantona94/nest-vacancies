import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateVacancyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  @IsString()
  @MaxLength(300, { message: 'Description must be no more than 300 symbols' })
  description: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  arraySkills: string[];
}
