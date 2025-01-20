import { Controller, Post } from '@nestjs/common';

@Controller('dog')
export class DogController {
  @Post("all")
  findAll() : string {
    return "Post all dogs"
  }
}
