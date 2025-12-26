import { AuthService } from './auth.service';
import { SignInDto, SignInResponse } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(dto: SignInDto): Promise<SignInResponse>;
}
