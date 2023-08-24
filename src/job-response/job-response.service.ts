import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateJobResponseDto } from './dto/create-job-response.dto';
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
    const existJobResponseDto = await this.jobResponseRepository.findOne({
      where: {
        user: { id: +createJobResponseDto.user},
        vacancy: { id: +createJobResponseDto.vacancy},
      },
    });
    if (existJobResponseDto) throw new BadRequestException('This job response already exist');

    const newJobResponse = {
      user: { id: +createJobResponseDto.user },
      vacancy: { id: +createJobResponseDto.vacancy },
    };

    return await this.jobResponseRepository.save(newJobResponse);
  }
}
