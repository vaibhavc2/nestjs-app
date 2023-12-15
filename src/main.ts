import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

(async function () {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.log(
    `\n🚀 Application is successfully running on: ${await app.getUrl()}`,
  );
})();
