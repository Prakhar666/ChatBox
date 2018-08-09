import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private ser : AuthServiceService) { }
  //str1: string;
  addchnl :string;
  adduser:string;
  sendmsg : string;
  showmsg : string;
  messages=[];
    addCh()
    {
     this.ser.addChannel(this.addchnl).subscribe(Response=> (console.log(Response)));
    }

    addmember()
    {
    this.ser.addUser(this.adduser).subscribe(Response=> (console.log(Response)));
    }
 
    sendMsg()
     {
      this.ser.sendMessage(this.sendmsg).subscribe(res=>{
      console.log(res)
     }),
      err=>{
        console.log(err);
      }
    }
 
    
    showMsg()   
  {
   
   this.ser.showMessage().subscribe(res1=>{
      console.log(res1); 
      let length =res1.messages.length;
      //var i;
      //var messages[]

      for(let index=0;index<length;index++)
      {
        this.messages.push(res1.messages[index].body);
      }
     }),
    err=>{
      console.log(err);
    } 

  }
 
  ngOnInit() {

    this.showMsg()
  }

}
