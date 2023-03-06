import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbtestController } from './dbtest.controller';
import { DbtestService } from './dbtest.service';
import { Dbtest, DbtestSchema } from './schemas/dbtest.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Dbtest.name, schema: DbtestSchema}])],
  controllers: [DbtestController],
  providers: [DbtestService]
})
export class DbtestModule {}
