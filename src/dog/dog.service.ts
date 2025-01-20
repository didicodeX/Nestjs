import { Injectable } from '@nestjs/common';
import { ALL_DOGS } from './db';
// Definision du provider
@Injectable()
export class DogService {
  findAll(): Promise<string[]> {
    return Promise.resolve(ALL_DOGS);
  }
}
