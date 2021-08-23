import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/constants';
import { CustomLogger } from './lib/logger';

async function bootstrap() {
  const logger = new CustomLogger();
  const app = await NestFactory.create(AppModule, {
    logger,
  });

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  });

  logger.log(`App listening on port [${PORT}]`);
  await app.listen(PORT);
}

bootstrap();
