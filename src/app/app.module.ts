import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from './auth-service.service';


const routes: Routes = [
 
  { path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },

  { path :'ChatRoom',
    component: ChatRoomComponent,
    canActivate: [AuthServiceService]
  },

  { path :'signin',
    component: SigninComponent
  
  },
  { path :'**',
  component: SigninComponent
},
  
  

  
 
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,SocialLoginModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [ {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule {}

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("722043275231-uoujph8j17a7bvjashi9065j83fvjntd.apps.googleusercontent.com")
      },

      // {
      //   id: FacebookLoginProvider.PROVIDER_ID,
      //   provider: new FacebookLoginProvider("722043275231-uoujph8j17a7bvjashi9065j83fvjntd.apps.googleusercontent.com")
      // }
        // {
        //   id: TwitterLoginProvider.PROVIDER_ID,
        //   provider: new TwitterLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
        // },
    ]
);
return config;
 }
