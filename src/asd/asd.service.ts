import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AsdService {
  constructor(private readonly configService: ConfigService) {}

  showEnvVars() {
    return {
      NODE_ENV: process.env.NODE_ENV,
      DB_URI: `${this.configService.get<string>("DB_URI")}`,
      asd: "asd",
    };
  }
}
