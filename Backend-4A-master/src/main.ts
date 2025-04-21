import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import{DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Backend API Nest')
  .setDescription('Backend API Nest')
  .setVersion('1.0')
  .addTag('Api Rest')
  .build();

  const document= SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
