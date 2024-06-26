/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Name } from "./Name";
import { NameCountArgs } from "./NameCountArgs";
import { NameFindManyArgs } from "./NameFindManyArgs";
import { NameFindUniqueArgs } from "./NameFindUniqueArgs";
import { CreateNameArgs } from "./CreateNameArgs";
import { UpdateNameArgs } from "./UpdateNameArgs";
import { DeleteNameArgs } from "./DeleteNameArgs";
import { NameService } from "../name.service";
@graphql.Resolver(() => Name)
export class NameResolverBase {
  constructor(protected readonly service: NameService) {}

  async _namesMeta(
    @graphql.Args() args: NameCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Name])
  async names(@graphql.Args() args: NameFindManyArgs): Promise<Name[]> {
    return this.service.names(args);
  }

  @graphql.Query(() => Name, { nullable: true })
  async name(@graphql.Args() args: NameFindUniqueArgs): Promise<Name | null> {
    const result = await this.service.name(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Name)
  async createName(@graphql.Args() args: CreateNameArgs): Promise<Name> {
    return await this.service.createName({
      ...args,
      data: {
        ...args.data,

        name: args.data.name
          ? {
              connect: args.data.name,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Name)
  async updateName(@graphql.Args() args: UpdateNameArgs): Promise<Name | null> {
    try {
      return await this.service.updateName({
        ...args,
        data: {
          ...args.data,

          name: args.data.name
            ? {
                connect: args.data.name,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Name)
  async deleteName(@graphql.Args() args: DeleteNameArgs): Promise<Name | null> {
    try {
      return await this.service.deleteName(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Name], { name: "names" })
  async findNames(
    @graphql.Parent() parent: Name,
    @graphql.Args() args: NameFindManyArgs
  ): Promise<Name[]> {
    const results = await this.service.findNames(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Name, {
    nullable: true,
    name: "name",
  })
  async getName(@graphql.Parent() parent: Name): Promise<Name | null> {
    const result = await this.service.getName(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
