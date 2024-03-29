import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import { Document, ObjectId } from 'mongoose';
import { Transform } from 'class-transformer';
import mongoose from 'mongoose';

export type UserDocument = User & Document;

//if( !mongoose.Types.ObjectId.isValid(_id) ){ return false};  

@Schema()
export class User {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ required: true })
  @IsEmail()
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ default: '0' })
  uRole: string;

  @Prop({ required: true })
  phoneNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
