import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CORS_ORIGIN } from './config/constants';
import { DefaultModule } from './default/default.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      cors: {
        origin: CORS_ORIGIN,
        credentials: false,
      },
      debug: true,
      playground: true,
      autoSchemaFile: process.cwd() + '/src/schema.gql',
      include: [DefaultModule],
      context: ({ req }) => {
        // Get the users token from the headers.
        const bearer = req.headers.authorization || '';
        if (!bearer) return {};

        const token = bearer.replace('Bearer ', '');
        return { token };
      },
    }),
    DefaultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
