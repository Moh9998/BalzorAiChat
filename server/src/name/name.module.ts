import { Module } from "@nestjs/common";
import { NameModuleBase } from "./base/name.module.base";
import { NameService } from "./name.service";
import { NameController } from "./name.controller";
import { NameResolver } from "./name.resolver";

@Module({
  imports: [NameModuleBase],
  controllers: [NameController],
  providers: [NameService, NameResolver],
  exports: [NameService],
})
export class NameModule {}
