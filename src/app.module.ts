import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modulos/users/domain/entities/user.entity';
import { UsersModule } from './modulos/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'gabriel',
      password: 'senha123',
      database: 'primeira_api_db',
      entities: [User],
      synchronize: false,
      logging: true,
    }),
    UsersModule, // ← Adicionar o módulo de usuários
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}