import { Body, Controller, Post } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { Faculties } from './entities/faculties.entity.js';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}
  @Post('create-faculty')
  async CreateFaculty(@Body()dto:CreateFacultyDto):Promise<Faculties|string>{
    return this.facultiesService.CreateFaculty(dto);
  }
}
