import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { map} from 'rxjs/operators'
import { CanActivate } from '../../node_modules/@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {
  UserName: string = 'AC9c13dd261af3b9a2f88440fcc178f61c';
  Password: string = 'a0ff7ddbd498a53fa1e4200ea05b79c8';  
  channelId= 'CH11a0ea120dec438c9d1880527ed00e5d'
 username: string = "prakhar6gupta@gmail.com";
 channellist: any;
  
  url = 'https://chat.twilio.com/v2/Services';
 channel : string="https://chat.twilio.com/v2/Services/ISe4edd166d507411f9ed229d1fa3bcce6/Channels"
 ServiceId: string="IS8b9188e1f58e439b94915110ee3afb4e";
  

//   constructor(private http: HttpClient) { }
//   getDetail() : Observable<any>
//   {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/x-www-form-urlencoded',
//         'Authorization': 'Basic QUM3N2ZiOWZhZmNlNWU5OWUxMWE0OGMwNTA1NTMyZWIzYzo0MjdjNjU4ODg5NWQzODkzMjg1ZTQzMmEzNTkwOGQ5NQ=='
//       })

//     };
//     const body = new HttpParams().set('FriendlyName','ChatRoom')
//     return this.http.post('https://chat.twilio.com/v2/Services',body.toString(),httpOptions)
    
//   }
// }
constructor(private http:HttpClient) { }
canActivate(){
  if(localStorage.getItem('id')==='113567024437401345852')
  {
    return true;
  }
  else
  {
    false;
  }
}
addchnl :string;
adduser : string;
sendmsg : string;
showmsg : string;
  
getDetail() : Observable<any>
{
  const body = new HttpParams().set('FriendlyName','Prakhar')
  return this.http.post(this.url,body.toString(), httpOptions)
}

getchannel() : Observable<any>
{
  const body=new HttpParams().set('UniqueName','Work');
    return this.http.post(this.channel,body.toString(), httpOptions)
}

setData() : Observable<any>{
  return this.http.post(this.url,"FriendlyName = Prakhar", httpOptions);
}

// createChannel() : Observable<any>{
//   return this.http.post(this.channel,"UniqueName =Angular Chatbox", this.httpOptions);
// }

displayChannel() : Observable<any>{
  return this.http.get('https://chat.twilio.com/v2/Services/ISe4edd166d507411f9ed229d1fa3bcce6/Channels', httpOptions);
}
// chnl : string;
addChannel(addchnl ) : Observable<any>{
 // const body=new HttpParams().set('UniqueName', 'chatting');
  return this.http.post("https://chat.twilio.com/v2/Services/ISe4edd166d507411f9ed229d1fa3bcce6/Channels",'FriendlyName=Prakhar&UniqueName='+addchnl , httpOptions);
}


// addRole() : Observable<any>{
//   return this.http.post("https://chat.twilio.com/v2/Services/ISee3ad4f4257240569a8af5351afab978/roles","FriendlyName =Aditee Saxena & Permission=createchannel & type=deployment", this.httpOptions);
// }


addUser(adduser) : Observable<any>{
  return this.http.get("https://chat.twilio.com/v2/Services/ISe4edd166d507411f9ed229d1fa3bcce6/users"+adduser, httpOptions);
}

sendMessage(sendmsg) : Observable<any>{
  // return this.http.post("https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/channels/CH0631f7fa19a84fbbb2b0045e8af85516/messages","FriendlyName =Aditee Saxena", httpOptions);
  return this.http.post("https://chat.twilio.com/v2/Services/"+this.ServiceId+"/Channels/"+this.channelId+"/Messages","ChannelSid="+this.channelId+"&ServicesSid="+this.ServiceId+"&Body="+sendmsg+"&From="+this.username,httpOptions);
}

showMessage() : Observable<any>{
 // return this.http.get("https://chat.twilio.com/v2/Services/IS8b9188e1f58e439b94915110ee3afb4e/channels/CH11a0ea120dec438c9d1880527ed00e5d/messages", httpOptions);
  // return this.http.get('',httpOptions)
  return this.http.get("https://chat.twilio.com/v2/Services/"+this.ServiceId+"/Channels/"+this.channelId+"/Messages",httpOptions).pipe(map(data=>data));
}

}

const httpOptions = {
headers: new HttpHeaders({
  'Content-Type':  'application/x-www-form-urlencoded',
  'Authorization': 'Basic QUM5YzEzZGQyNjFhZjNiOWEyZjg4NDQwZmNjMTc4ZjYxYzphMGZmN2RkYmQ0OThhNTNmYTFlNDIwMGVhMDViNzljOA=='
})

}


