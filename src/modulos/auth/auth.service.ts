import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConsultaUsuario } from '../users/domain/services/consulta_usuarios.service';
import { JwtService } from '@nestjs/jwt';

export interface UserTipos {
  access_token: string;
  user: {
    id: number;
    name: string;
    idade: number;
    email: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: ConsultaUsuario,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<UserTipos> {
    const user = await this.usersService.consultarEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    
    const payload = { sub: user.id, userEmail: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        name: user.name,
        idade: user.idade,
        email: user.email,
        isActive: user.is_active,
        createdAt: user.created_at.toISOString(),
        updatedAt: user.updated_at.toISOString(),
      }
    };
  }
}
