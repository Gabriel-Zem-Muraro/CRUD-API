import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ConsultaUsuario } from './domain/services/consulta_usuarios.service';
import { CriaNovoUsuario } from './domain/services/cria_novo_usuario.service';
import { RemoveUsuario } from './domain/services/remove_usuario.service';
import { AtualizaUsuario } from './domain/services/atualiza_termo_por_id.service';
import { CreateUserDto } from './dto/user_validations';
import { UpdateUserDto } from './dto/user_update_validator.dto';

@Controller()
export class UserController {
  constructor(
    private readonly consultaUsuario: ConsultaUsuario,
    private readonly novoUsuario: CriaNovoUsuario,
    private readonly usuarioParaRemover: RemoveUsuario,
    private readonly usuarioParaAtualizar: AtualizaUsuario,
  ) {}

  @Get('user/:id')
  async getUserById(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: 400,
        exceptionFactory: () =>
          new BadRequestException('O ID deve ser um número'),
      }),
    )
    id: number,
  ) {
    return await this.consultaUsuario.consultarPorID(Number(id));
  }

  @Get('user')
  async getAllUsers(@Query('isActived', ParseBoolPipe) ativo: boolean) {
    return await this.consultaUsuario.consultarTodos(ativo);
  }

  @Post('user')
  async addNewUser(@Body() usuario: CreateUserDto) {
    return await this.novoUsuario.criaNovoUsuario(usuario);
  }

  @Delete('user')
  async removeUser(
    @Body(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: 400,
        exceptionFactory: () =>
          new BadRequestException('O id deve ser um numero'),
      }),
    )
    id: number,
  ) {
    const resultado = await this.usuarioParaRemover.removeUsuarioPorId(id);

    if (typeof resultado === 'string') {
      throw new NotFoundException(`Usuário com ID ${id} não foi encontrado`);
    }
    return { message: `Usuário com id ${id} removido com sucesso`, id };
  }

  @Patch('user/:id')
  async elementUpdate(
    @Body() usuario: UpdateUserDto,
    @Param('id') idUsuario: number,
  ) {
    return await this.usuarioParaAtualizar.atualizaTermo(usuario, idUsuario);
  }

  @Put('user/:id')
  async userUpdate(
    @Body() usuario: UpdateUserDto,
    @Param('id') idUsuario: number,
  ) {
    return await this.usuarioParaAtualizar.atualizaUsuario(usuario, idUsuario);
  }
}
