import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('faculty')
export class Faculties {
    @PrimaryColumn()
    id:string;
    @Column({
        nullable:false
    })
    name:string;
    @Column({
        nullable:false
    })
    expertise:string;
    @Column()
    noOfPublication:number;
}