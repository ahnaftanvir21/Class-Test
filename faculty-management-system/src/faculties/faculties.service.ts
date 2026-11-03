import { Injectable } from '@nestjs/common';
import { Faculties } from './entities/faculties.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
    constructor(@InjectRepository(Faculties) private facultyRepo: Repository<Faculties>,){}
    async CreateFaculty(dto:CreateFacultyDto):Promise<Faculties|string>{
        const fac =await this.facultyRepo.create(dto);
        const f = await this.facultyRepo.save(fac);
        if(f!= null){
            return f;
        }
        else{
            return "Faculty Creation Failed";
        }
    }
}
