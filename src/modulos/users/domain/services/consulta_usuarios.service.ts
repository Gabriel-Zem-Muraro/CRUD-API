import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ConsultaUsuario{
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async consultar(id: number): Promise<User | string> {
  
    const usuario = await this.userRepository.findOne({ where: { id: id } });

    if (!usuario) {
      return `Usuário com ID ${id} não encontrado!`
    } 
      return usuario
  }

  async consultarTodos(isAtivo: boolean): Promise<Array<User> | string> {
    const todosUsers = await this.userRepository.find({ where: { is_active: isAtivo }});
    if(!todosUsers.length) {
      return `Não ha nenhum usuario registado!`
    }
    return todosUsers
  }
}