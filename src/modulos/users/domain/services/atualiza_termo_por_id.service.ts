import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateUserDto } from '../../dto/user_update_validator.dto';

export class AtualizaUsuario {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async atualizaTermo(
    usuario: UpdateUserDto,
    id: number,
  ): Promise<User | string> {
    const usuarioAtualizado = await this.userRepository.findOne({
      where: { id: id },
    });

    if (!usuarioAtualizado) {
      return `Usuario com id ${id} não encontrado`;
    }
    if (usuario.name) {
      usuarioAtualizado.name = usuario.name;
    }
    if (usuario.email) {
      usuarioAtualizado.email = usuario.email;
    }
    if (usuario.password) {
      usuarioAtualizado.password = usuario.password;
    }
    if (usuario.idade) {
      usuarioAtualizado.idade = usuario.idade;
    }

    await this.userRepository.update(id, usuarioAtualizado);
    return `Usuario com id ${id} foi atualizado`;
  }

  async atualizaUsuario(
    usuario: UpdateUserDto,
    id: number,
  ): Promise<User | string> {
    const usuarioAtualizaInteiro = await this.userRepository.findOne({
      where: { id: id },
    });
    console.log(usuario);

    if (!usuarioAtualizaInteiro) {
      return `Usuario com id ${id} não encontrado`;
    }

    if (usuario.name) {
      usuarioAtualizaInteiro.name = usuario.name;
    }
    if (usuario.email) {
      usuarioAtualizaInteiro.email = usuario.email;
    }
    if (usuario.password) {
      usuarioAtualizaInteiro.password = usuario.password;
    }
    if (usuario.idade) {
      usuarioAtualizaInteiro.idade = usuario.idade;
    }
    if (usuario.is_active === undefined) {
      usuarioAtualizaInteiro.is_active = usuario.is_active;
    }

    await this.userRepository.update(id, usuarioAtualizaInteiro);
    return `Usuario com id ${id} foi atualizado`;
  }
}
