import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

export class CriaNovoUsuario {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async criaNovoUsuario(novoUser): Promise<User | string> {
    const emailAVerificar = await this.userRepository.findOne({
      where: { email: novoUser.email },
    });

    if (emailAVerificar?.email === novoUser.email) {
      return `Este email ${emailAVerificar?.email} já existe no banco`;
    }

    const NewUser = new User();
    NewUser.name = novoUser.name;
    NewUser.email = novoUser.email;
    NewUser.idade = novoUser.idade;
    NewUser.password = novoUser.password;
    return (
      this.userRepository.save(NewUser),
      `Usuario ${NewUser.name} cadastrado`
    );
  }
}
