import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modulos/users/domain/entities/user.entity';
import { UsersModule } from './modulos/users/users.module';
import { AuthModule } from './modulos/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modulos/auth/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST_DB,
      port: +process.env.PORT_DB!,
      username: process.env.NOME_DB,
      password: process.env.SENHA_DB,
      database: process.env.NAME_DB,
      entities: [User],
      synchronize: false,
      logging: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
