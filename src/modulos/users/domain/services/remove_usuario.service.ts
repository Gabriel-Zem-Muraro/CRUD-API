import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

export class RemoveUsuario {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async removeUsuarioPorId(id: number): Promise<User | string> {
    const usuario = await this.userRepository.findOne({ where: { id: id } });
    
    if (!usuario?.id) {
      return `Usuario com id ${id} não encontrado`;
    }
    return await this.userRepository.remove(usuario)
  }
}