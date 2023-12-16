import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { envConfig } from "./config/env-config";

(async function () {
  const app = await NestFactory.create(AppModule);
  await app.listen(envConfig.dev.port);

  console.log(
    `\n🚀 Application is successfully running in '${
      envConfig.dev.nodeEnv
    }' mode on: ${await app.getUrl()}`,
  );
})();
