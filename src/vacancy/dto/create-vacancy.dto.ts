import { IsNotEmpty, MaxLength } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateVacancyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  @MaxLength(300, { message: 'Description must be no more than 300 symbols' })
  description: string;

  @IsNotEmpty()
  arraySkills: string[];
}
