import { Controller, Get } from "@nestjs/common";
import { AsdService } from "./asd.service";

@Controller()
export class AsdController {
  constructor(private readonly appService: AsdService) {}

  @Get("/asd")
  showEnvVars() {
    return this.appService.showEnvVars();
  }
}
