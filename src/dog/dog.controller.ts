import { Controller, Get } from '@nestjs/common';
import { DogService } from './dog.service';

// dogController est un consumer de DogServices
// le DogService est injecte au DogController a l'aide de la declaration de son type dans son constructeur
@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService){}
  @Get("all")
  findAll() : Promise<string[]> {
    return this.dogService.findAll();
  }
}
