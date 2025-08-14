import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ConsultaUsuario } from './domain/services/consulta_usuarios.service';
import { CriaNovoUsuario } from './domain/services/cria_novo_usuario.service'
import { RemoveUsuario } from './domain/services/remove_usuario.service';
import { AtualizaUsuario } from './domain/services/atualiza_termo_por_id.service'
import { User } from './domain/entities/user.entity';

@Controller()
export class UserController {
  constructor(
    private readonly consultaUsuario: ConsultaUsuario, 
    private readonly novoUsuario: CriaNovoUsuario, 
    private readonly usuarioParaRemover: RemoveUsuario,
    private readonly usuarioParaAtualizar: AtualizaUsuario,
  ) {} 

  @Get('user')
  async getUserById(@Body('id') id: number) {
    return await this.consultaUsuario.consultar(id);
  }

  @Get('user') 
  async getAllUsers(@Body('isActived') ativo: boolean) {
    return await this.consultaUsuario.consultarTodos(ativo);
  }

  @Post('user')
  async addNewUser(@Body() usuario: User) {
    return await this.novoUsuario.criaNovoUsuario(usuario);
  }

  @Delete('user')
  async removeUser(@Body('id') id: number) {
    return await this.usuarioParaRemover.removeUsuarioPorId(id);
  }

  @Patch('user')
  async elementUpdate(@Body() usuario: User) {
    return await this.usuarioParaAtualizar.atualizaTermo(usuario);
  }

  @Put('user')
  async userUpdate(@Body() usuario: User) {    
    return await this.usuarioParaAtualizar.atualizaUsuario(usuario);
  }
}