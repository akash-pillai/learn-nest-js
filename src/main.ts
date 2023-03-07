import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/user.module';
// import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(8081);
}
bootstrap();
