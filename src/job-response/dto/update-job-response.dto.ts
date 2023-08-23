import { PartialType } from '@nestjs/mapped-types';
import { CreateJobResponseDto } from './create-job-response.dto';

export class UpdateJobResponseDto extends PartialType(CreateJobResponseDto) {}
