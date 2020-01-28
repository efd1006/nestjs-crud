import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

function swagger(app) {
  const options = new DocumentBuilder()
    .setTitle('Nestjs CRUD')
    .setDescription('Nestjs CRUD for React CRUD')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  swagger(app);
  await app.listen(3001);
}
bootstrap();
