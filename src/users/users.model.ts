import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'id'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @ApiProperty({example: 'user@urk.net', description: 'Post adress'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;
  @ApiProperty({example: '12345678', description: 'password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'true', description: 'Ban or not'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'За хулиганство', description: 'ban Reason'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;
}