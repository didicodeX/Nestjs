import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogController } from './dog/dog.controller';
import { DogService } from './dog/dog.service';
import { BirdModule } from './bird/bird.module';

@Module({
  imports: [BirdModule],
  controllers: [AppController, DogController],
  // renseigne tout mes providers definie dans les fichier .services.ts
  providers: [AppService, DogService],
})
export class AppModule { }
