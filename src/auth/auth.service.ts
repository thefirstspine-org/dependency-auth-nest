import { Injectable } from '@nestjs/common';
import { IPublicUser, AuthService as TFSAuthService } from '@thefirstspine/auth';

/**
 * Nest service to check auth context from the Auth net service.
 */
@Injectable()
export class AuthService {

  /**
   * Internal TFS service.
   */
  protected tfsAuthService: TFSAuthService;

  constructor() {
    this.tfsAuthService = new TFSAuthService();
  }

  /**
   * Validates a JWT to the auth platform service
   * @param jwt The JWT to send to the auth net service
   */
  async me(jwt: string): Promise<number|null> {
    return this.tfsAuthService.me(jwt);
  }

  /**
   * Validates a JWT to the auth platform service
   * @param jwt The JWT to send to the auth net service
   */
  async meFull(jwt: string): Promise<IPublicUser|null> {
    return this.tfsAuthService.meFull(jwt);
  }

}
