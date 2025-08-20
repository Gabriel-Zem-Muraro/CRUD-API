import {
  IsString,
  IsEmail,
  IsNumber,
  MinLength,
  MaxLength,
  Min,
  Max,
  isNumber,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Nome deve ser uma string' })
  @MinLength(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
  @MaxLength(100, { message: 'Nome não pode exceder 100 caracteres' })
  name?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Idade deve ser um número' })
  @Min(0, { message: 'Idade deve ser maior ou igual a 0' })
  @Max(150, { message: 'Idade deve ser menor ou igual a 150' })
  idade?: number;

  @IsOptional()
  @IsEmail({}, { message: 'Email deve ser um endereço de email válido' })
  email?: string;

  @IsOptional()
  @IsString({ message: 'Senha deve ser uma string' })
  @MinLength(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
  password?: string;

  @IsOptional()
  is_active: boolean;
}
