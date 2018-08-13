import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private ser : AuthServiceService) { 
    this.id = localStorage.getItem('id');
  }
  id;
  //str1: string;
  addchnl :string;
  adduser:string;
  sendmsg : string;
  showmsg : string;
  messages=[];
  channelArray=[];
  displayname=localStorage.getItem('name');

  
    addCh()
    {
      if(this.addchnl!= ""){
        var info = this.ser.addChannel(this.addchnl).subscribe(res => {});
      } }
    //   }
    //  this.ser.addChannel(this.addchnl).subscribe(Response=> (console.log(Response)));
    // }

    addmember()
    {
    this.ser.addUser(this.adduser).subscribe(Response=> (console.log(Response)));
    }
 
   
  member;
    sendMsg() {
  
      this.ser.sendMessage(this.sendmsg,this.member).subscribe(data=>console.log(data));
    
      this.ser.showMessage(this.member).subscribe(data=>{})
    }

 
    
    showMsg()   
  {
   
 
  if(this.member!= undefined)
  {
  // this.ser.showmsg.message;
  this.ser.showMessage(this.member).subscribe(res1=>{
     this.messages = res1.messages;
 });
  
}

}

  showChannelList() {
    this.ser.displayChannel().subscribe(res => {
     
     this.channelArray =res.channels;
    },
      err => {
        console.log(err);
      })
  }

  join(channels){
   // console.log(channels,"ok")
   this.member = channels;

    var displayCh= this.ser.joinCh(channels);
    displayCh.subscribe(response => (console.log(response)));

  }

  
send(id){
  this.member = id;
}


 
  ngOnInit() {
    setInterval(() => {this.showMsg() }, 1000)
    //this.showMsg();
    this.showChannelList();
  }

  }
