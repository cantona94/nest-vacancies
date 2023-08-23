import { IsNotEmpty, IsBoolean } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Vacancy } from 'src/vacancy/entities/vacancy.entity';

export class CreateJobResponseDto {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  vacancy: Vacancy;

  @IsBoolean()
  viewed: boolean;
}
