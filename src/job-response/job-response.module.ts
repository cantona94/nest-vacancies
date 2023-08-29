import { Module } from '@nestjs/common';
import { JobResponseService } from './job-response.service';
import { JobResponseController } from './job-response.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobResponse } from './entities/job-response.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobResponse])],
  controllers: [JobResponseController],
  providers: [JobResponseService],
})
export class JobResponseModule {}
