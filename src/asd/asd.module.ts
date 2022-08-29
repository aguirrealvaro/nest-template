import { Module } from "@nestjs/common";
import { AsdController } from "./asd.controller";
import { AsdService } from "./asd.service";

@Module({
  imports: [],
  controllers: [AsdController],
  providers: [AsdService],
})
export class AsdModule {}
