import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFacultyDto{
    @IsNotEmpty()
    @IsString()
    id:string;
    @IsNotEmpty()
    @IsString()
    name:string;
    @IsNotEmpty()
    @IsString()
    expertise:string;
    @IsNotEmpty()
    @IsNumber()
    @Type(()=>Number)
    noOfPublication:number;
}