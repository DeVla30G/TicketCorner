import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Dbtest } from './schemas/dbtest.schema';

@Injectable()
export class DbtestService {
    constructor(
        @InjectModel(Dbtest.name)
        private DbtestModel: mongoose.Model<Dbtest>
    ){

    }

    async findAll(): Promise<Dbtest[]>{
        const names = await this.DbtestModel.find();
        return names;
    }
}
