import { Injectable } from '@nestjs/common';

@Injectable()
export class DefaultService {
  async hello(): Promise<boolean> {
    return true;
  }
}
