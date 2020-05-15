import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/base-entity';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

@Entity('companies')
export class Company extends BaseEntity {
  @IsString()
  @IsNotEmpty()
  @Column()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  domain: string;

  @IsString()
  @IsOptional()
  @Column()
  description: string;

  @IsNumber()
  @IsOptional()
  @Column()
  contact: number;
}
