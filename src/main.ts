import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api');

  // The following section uses the ValidationPipe to validate all incoming
  // data. It does this by defining the pipe as a global middleware, which is
  // executed for every incoming request. The ValidationPipe is configured to
  // remove any data that is not defined in the DTO (data transfer object), and
  // to throw an error if any data that is not defined in the DTO is sent.
  //
  // In this way, we can ensure that all incoming data is valid and safe to use
  // in our application.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  console.log('Server running on port ' + envs.port);
  await app.listen(envs.port);
}
bootstrap();
