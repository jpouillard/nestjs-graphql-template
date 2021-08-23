import { Resolver, Query } from '@nestjs/graphql';
import { DefaultService } from './default.service';

@Resolver()
export class DefaultResolver {
  constructor(private service: DefaultService) {}

  // -------------------------
  // Hello method
  // -------------------------
  @Query((returns) => Boolean)
  async hello(): Promise<boolean> {
    return this.service.hello();
  }
}
