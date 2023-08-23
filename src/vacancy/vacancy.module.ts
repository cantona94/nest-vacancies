import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from './entities/vacancy.entity';
import { JobResponse } from 'src/job-response/entities/job-response.entity';
import { JobResponseService } from 'src/job-response/job-response.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Vacancy, JobResponse])],
  controllers: [VacancyController],
  providers: [VacancyService, JobResponseService, UserService],
})
export class VacancyModule {}
