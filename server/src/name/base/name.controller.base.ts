/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NameService } from "../name.service";
import { NameCreateInput } from "./NameCreateInput";
import { Name } from "./Name";
import { NameFindManyArgs } from "./NameFindManyArgs";
import { NameWhereUniqueInput } from "./NameWhereUniqueInput";
import { NameUpdateInput } from "./NameUpdateInput";

export class NameControllerBase {
  constructor(protected readonly service: NameService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Name })
  async createName(@common.Body() data: NameCreateInput): Promise<Name> {
    return await this.service.createName({
      data: {
        ...data,

        name: data.name
          ? {
              connect: data.name,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        name: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Name] })
  @ApiNestedQuery(NameFindManyArgs)
  async names(@common.Req() request: Request): Promise<Name[]> {
    const args = plainToClass(NameFindManyArgs, request.query);
    return this.service.names({
      ...args,
      select: {
        createdAt: true,
        id: true,

        name: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Name })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async name(
    @common.Param() params: NameWhereUniqueInput
  ): Promise<Name | null> {
    const result = await this.service.name({
      where: params,
      select: {
        createdAt: true,
        id: true,

        name: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Name })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateName(
    @common.Param() params: NameWhereUniqueInput,
    @common.Body() data: NameUpdateInput
  ): Promise<Name | null> {
    try {
      return await this.service.updateName({
        where: params,
        data: {
          ...data,

          name: data.name
            ? {
                connect: data.name,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          name: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Name })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteName(
    @common.Param() params: NameWhereUniqueInput
  ): Promise<Name | null> {
    try {
      return await this.service.deleteName({
        where: params,
        select: {
          createdAt: true,
          id: true,

          name: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/names")
  @ApiNestedQuery(NameFindManyArgs)
  async findNames(
    @common.Req() request: Request,
    @common.Param() params: NameWhereUniqueInput
  ): Promise<Name[]> {
    const query = plainToClass(NameFindManyArgs, request.query);
    const results = await this.service.findNames(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        name: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/names")
  async connectNames(
    @common.Param() params: NameWhereUniqueInput,
    @common.Body() body: NameWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      names: {
        connect: body,
      },
    };
    await this.service.updateName({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/names")
  async updateNames(
    @common.Param() params: NameWhereUniqueInput,
    @common.Body() body: NameWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      names: {
        set: body,
      },
    };
    await this.service.updateName({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/names")
  async disconnectNames(
    @common.Param() params: NameWhereUniqueInput,
    @common.Body() body: NameWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      names: {
        disconnect: body,
      },
    };
    await this.service.updateName({
      where: params,
      data,
      select: { id: true },
    });
  }
}