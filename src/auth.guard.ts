import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

/**
 * Guard to filter incoming requests that are intend to be signed with a JWT under the `Authorization` HTTP header.
 * Pass the validation when the provided JWT is present & valid in the auth net service.
 */
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService) {}

  /**
   * @inheritdoc
   */
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    // Check the bearer JSON token
    if (
      !context.switchToHttp().getRequest().headers ||
      !context.switchToHttp().getRequest().headers.authorization
    ) {
      return false;
    }
    
    // Get the user ID
    const userId: number|null = await this.authService.me(
      context.switchToHttp().getRequest().headers.authorization.replace(/Bearer /, '')
    );
    if (!userId) {
      return false;
    }

    // Set the user ID, and continue execution
    context.switchToHttp().getRequest().user = userId;
    return true;
  }
}
