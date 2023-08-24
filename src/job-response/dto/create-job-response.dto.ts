import { IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Vacancy } from 'src/vacancy/entities/vacancy.entity';

export class CreateJobResponseDto {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  vacancy: Vacancy;

  @IsBoolean()
  @IsOptional()
  viewed: boolean;
}
