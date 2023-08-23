import { Injectable } from '@nestjs/common';
import { CreateJobResponseDto } from './dto/create-job-response.dto';
import { UpdateJobResponseDto } from './dto/update-job-response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobResponse } from './entities/job-response.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JobResponseService {
  constructor(
    @InjectRepository(JobResponse)
    private readonly jobResponseRepository: Repository<JobResponse>,
  ) {}

  async create(createJobResponseDto: CreateJobResponseDto) {
    const newJobResponse = {
      user: { id: +createJobResponseDto.user },
      vacancy: { id: +createJobResponseDto.vacancy },
      viewed: false,
    };

    return await this.jobResponseRepository.save(newJobResponse);
  }
}
