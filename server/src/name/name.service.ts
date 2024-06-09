import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NameServiceBase } from "./base/name.service.base";

@Injectable()
export class NameService extends NameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
