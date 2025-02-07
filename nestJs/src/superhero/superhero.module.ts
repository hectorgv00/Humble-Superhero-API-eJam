import { Module } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';
import { SuperheroRepository } from './superhero.repository';
import { DbService } from 'src/service/db.service';

@Module({
  controllers: [SuperheroController],
  providers: [SuperheroService, SuperheroRepository, DbService],
})
export class SuperheroModule {}
