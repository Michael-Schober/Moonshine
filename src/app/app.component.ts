import { Component } from '@angular/core';
import { OAuthService, AuthConfig, NullValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moonshine';

  constructor(private oauthService: OAuthService)
  {
    this.configure();
  }

  private configure()
  {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8180/auth/realms/blackout',
    redirectUri: window.location.origin + "/login",
    clientId: 'Moonshine',
    scope: 'openid profile email offline_access read_name',
    responseType: 'code',
    disableAtHashCheck: true,
    showDebugInformation: true
  }
}
