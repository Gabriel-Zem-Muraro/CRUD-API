import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConsultaUsuario } from '../users/domain/services/consulta_usuarios.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: ConsultaUsuario,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.consultarEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, userEmail: user.name };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
