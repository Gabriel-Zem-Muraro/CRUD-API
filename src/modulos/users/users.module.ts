import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { ConsultaUsuario } from './domain/services/consulta_usuarios.service';
import { UserController } from './user.controller';
import { CriaNovoUsuario } from './domain/services/cria_novo_usuario.service';
import { RemoveUsuario } from './domain/services/remove_usuario.service';
import { AtualizaUsuario } from './domain/services/atualiza_termo_por_id.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [ConsultaUsuario, CriaNovoUsuario, RemoveUsuario, AtualizaUsuario],
  exports: [ConsultaUsuario],
})
export class UsersModule {}
