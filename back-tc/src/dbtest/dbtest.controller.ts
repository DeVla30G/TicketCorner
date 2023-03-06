import { Controller, Get } from '@nestjs/common';
import { DbtestService } from './dbtest.service';
import { Dbtest } from './schemas/dbtest.schema';

@Controller('dbtest')
export class DbtestController {
    constructor(private dbtestService: DbtestService){}
    @Get()
    async getAllNames(): Promise<Dbtest[]>{
        return this.dbtestService.findAll();
    }
}
