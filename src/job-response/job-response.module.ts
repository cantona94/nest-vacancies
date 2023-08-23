import { Module } from '@nestjs/common';
import { JobResponseService } from './job-response.service';
import { JobResponseController } from './job-response.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobResponse } from './entities/job-response.entity';
import { Vacancy } from 'src/vacancy/entities/vacancy.entity';
import { VacancyService } from 'src/vacancy/vacancy.service';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobResponse, Vacancy, User])],
  controllers: [JobResponseController],
  providers: [JobResponseService, VacancyService],
})
export class JobResponseModule {}
