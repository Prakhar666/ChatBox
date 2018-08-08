import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
 // TwitterLoginProvider,
} from "angular-6-social-login";
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,SocialLoginModule,
    HttpClientModule
  ],
  providers: [ {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("722043275231-uoujph8j17a7bvjashi9065j83fvjntd.apps.googleusercontent.com")
      }
        // {
        //   id: TwitterLoginProvider.PROVIDER_ID,
        //   provider: new TwitterLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
        // },
    ]
);
return config;
 }
