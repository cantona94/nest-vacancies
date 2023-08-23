import { Controller, Post, Body } from '@nestjs/common';
import { JobResponseService } from './job-response.service';
import { CreateJobResponseDto } from './dto/create-job-response.dto';

@Controller('job-response')
export class JobResponseController {
  constructor(private readonly jobResponseService: JobResponseService) {}

  @Post()
  create(@Body() createJobResponseDto: CreateJobResponseDto) {
    return this.jobResponseService.create(createJobResponseDto);
  }
}
