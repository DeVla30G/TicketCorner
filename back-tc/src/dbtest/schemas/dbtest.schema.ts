import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { Schema } from "@nestjs/mongoose";
import { Document, ObjectId } from 'mongoose';

export type DBTestDocument = Dbtest & Document;

@Schema()

export class Dbtest {
@Transform(({value}) => value.toSting())
_id: ObjectId;

@Prop()
name: string;
  static names: any;
  static dbtest: any;

}

export const DbtestSchema = SchemaFactory.createForClass(Dbtest);