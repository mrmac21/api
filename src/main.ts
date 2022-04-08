import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('Welcom to ' + process.env.APP_NAME + ' API');
  console.log("You are using '" + process.env.ORM + "' orm");
}
start();
