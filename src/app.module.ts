import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AsdModule } from "./asd/asd.module";

console.log(process.env.NODE_ENV);
console.log(`.env.${process.env.NODE_ENV}`);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    AsdModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
