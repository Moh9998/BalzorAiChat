import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NameService } from "./name.service";
import { NameControllerBase } from "./base/name.controller.base";

@swagger.ApiTags("names")
@common.Controller("names")
export class NameController extends NameControllerBase {
  constructor(protected readonly service: NameService) {
    super(service);
  }
}
