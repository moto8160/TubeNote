import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignInResponse } from './auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(dto: SignInDto): Promise<SignInResponse>;
}
