import { UnauthorizedException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { Repository } from 'typeorm';

export class AtualizaUsuario {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async atualizaTermo (usuario: User): Promise<User | string> {

    const usuarioAtualizado = await this.userRepository.findOne({ where: {id: usuario.id} });

    if (!usuarioAtualizado) {
      return `Usuario com id ${usuario.id} não encontrado`
    }
    usuarioAtualizado.name = usuario.name;
    usuarioAtualizado.email = usuario.email;
    usuarioAtualizado.password = usuario.password;
    usuarioAtualizado.idade = usuario.idade

    return await this.userRepository.update(usuario.id, usuarioAtualizado), `Usuario com id ${usuario.id} foi atualizado`
  }

  async atualizaUsuario (usuario): Promise<User | string> {

    const usuarioAtualizaInteiro = await this.userRepository.findOne({ where: {id: usuario.id} });
    console.log(usuario);
    if (!usuarioAtualizaInteiro) {
      return`Usuario com id ${usuario.id} não encontrado`
    }

    usuarioAtualizaInteiro.name = usuario.name;
    usuarioAtualizaInteiro.email = usuario.email;
    usuarioAtualizaInteiro.idade = usuario.idade;
    usuarioAtualizaInteiro.is_active = usuario.is_active;
    usuarioAtualizaInteiro.password = usuario.password;

    return await this.userRepository.update(usuario.id, usuarioAtualizaInteiro) , `Usuario com id ${usuario.id} foi atualizado`
  }

}