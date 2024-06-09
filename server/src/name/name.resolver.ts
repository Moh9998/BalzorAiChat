import * as graphql from "@nestjs/graphql";
import { NameResolverBase } from "./base/name.resolver.base";
import { Name } from "./base/Name";
import { NameService } from "./name.service";

@graphql.Resolver(() => Name)
export class NameResolver extends NameResolverBase {
  constructor(protected readonly service: NameService) {
    super(service);
  }
}
