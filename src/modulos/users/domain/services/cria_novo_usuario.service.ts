import { InjectRepository } from "@nestjs/typeorm";
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

export class CriaNovoUsuario {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async criaNovoUsuario(novoUser): Promise<User | string> {
    const emailAVerificar = await this.userRepository.findOne({ where: { email: novoUser.email } });
    
    if (!novoUser?.name) {
      return `Nome precisa ser inserido`
    } else if (!novoUser?.email) {
      return `Email precisa ser inserido`
    } else if (emailAVerificar?.email === novoUser.email) {
      return `Este email ${emailAVerificar?.email} já existe no banco`
    } else if (!novoUser?.password) {
      return `Senha precisa ser inserido`
    } else if (!novoUser?.idade) {
      return `Idade precisa ser inserido`
    }   
    const NewUser = new User();
    NewUser.name = novoUser.name;
    NewUser.email = novoUser.email;
    NewUser.idade = novoUser.idade;
    NewUser.password = novoUser.password;
    return this.userRepository.save(NewUser), `Usuario ${NewUser.name} cadastrado`;
  }

}