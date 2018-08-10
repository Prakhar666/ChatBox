import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angular-6-social-login';
import { AuthServiceService } from '../auth-service.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private socialAuthService: AuthService, private ser : AuthServiceService, private route : Router) { }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      var val= this.ser.getDetail();
      val.subscribe(data => console.log(data))
      

    } 
      
    else if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      var val= this.ser.getDetail();
      val.subscribe(data => console.log(data))
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.route.navigate(['ChatRoom']);
        localStorage.setItem('id', userData.id);
        localStorage.setItem('name', userData.name);
        


        
            
      }
    );
  }
  
}

  // ngOnInit() {
  // }


