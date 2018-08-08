import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
 // TwitterLoginProvider
} from 'angular-6-social-login';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private socialAuthService: AuthService, private ser : AuthServiceService) { }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      var q= this.ser.getDetail();
      q.subscribe(data => console.log(data))

    } 
      
    // else if (socialPlatform == "twitter") {
    //   socialPlatformProvider = TwitterLoginProvider.PROVIDER_ID;
    // }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        
            
      }
    );
  }
  
}

  // ngOnInit() {
  // }


