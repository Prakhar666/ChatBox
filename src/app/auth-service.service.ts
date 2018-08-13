import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { map} from 'rxjs/operators'
import { CanActivate } from '../../node_modules/@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  UserName: string = 'AC9c13dd261af3b9a2f88440fcc178f61c';
  Password: string = 'a0ff7ddbd498a53fa1e4200ea05b79c8';  
  channelId= 'CH34a04c00776c47c9b64466256229b16c'
 username: string = "prakhar6gupta@gmail.com";
 channellist: any;
  
  url = 'https://chat.twilio.com/v2/Services';
 channel : string="https://chat.twilio.com/v2/Services/IS3f0e8941420341428b82f6e652f58dc9/Channels"
 ServiceId: string="IS3f0e8941420341428b82f6e652f58dc9";
  

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

UserData: any;
constructor(private http:HttpClient) { }
// canActivate(){
//   if(localStorage.getItem('id')==='113567024437401345852')
//   {
//     return true;
//   }
//   else
//   {
//     false;
//   }
// }
addchnl :string;
adduser : string;
sendmsg : string;
showmsg;

  
getDetail() : Observable<any>
{
  const body = new HttpParams().set('FriendlyName','Prakhar')
  return this.http.post(this.url,body.toString(), httpOptions)
}

// getchannel(createCh) : Observable<any>
// {
//   const body=new HttpParams().set('UniqueName','Work');
//   //const body=new HttpParams().set('UniqueName', createCh);
//     return this.http.post(this.channel,body.toString(), httpOptions)
// }

setData() : Observable<any>{
  return this.http.post(this.url,"FriendlyName = Prakhar", httpOptions);
}

// createChannel() : Observable<any>{
//   return this.http.post(this.channel,"UniqueName =Angular Chatbox", this.httpOptions);
// }

displayChannel() : Observable<any>{
  return this.http.get('https://chat.twilio.com/v2/Services/IS3f0e8941420341428b82f6e652f58dc9/Channels', httpOptions);
}
// chnl : string;
addChannel(addchnl ) : Observable<any>{
  const body=new HttpParams().set('UniqueName', addchnl);
  return this.http.post(this.channel, body.toString(), httpOptions);
// return this.http.post("https://chat.twilio.com/v2/Services/IS3f0e8941420341428b82f6e652f58dc9/Channels",'FriendlyName=Prakhar&UniqueName='+addchnl , httpOptions);

}


// addRole() : Observable<any>{
//   return this.http.post("https://chat.twilio.com/v2/Services/ISee3ad4f4257240569a8af5351afab978/roles","FriendlyName =Aditee Saxena & Permission=createchannel & type=deployment", this.httpOptions);
// }


addUser(adduser) : Observable<any>{
  return this.http.get("https://chat.twilio.com/v2/Services/IS3f0e8941420341428b82f6e652f58dc9/users"+adduser, httpOptions);
}

sendMessage(sendmsg, member) : Observable<any>{
  // return this.http.post("https://chat.twilio.com/v2/Services/ISc2cd82178ec546ef98854a4f62cc8de7/channels/CH0631f7fa19a84fbbb2b0045e8af85516/messages","FriendlyName =Aditee Saxena", httpOptions);
  // return this.http.post("https://chat.twilio.com/v2/Services/"+this.ServiceId+"/Channels/"+this.channelId+"/Messages","ChannelSid="+this.channelId+"&ServicesSid="+this.ServiceId+"&Body="+sendmsg+"&From="+this.username,httpOptions);
  const body=new HttpParams().set('ChannelSid',member.service_id).set('ServiceSid',member.sid).set('Body',sendmsg).set('From', localStorage.getItem('id'))
  return this.http.post(member.links.messages,body.toString(),httpOptions);
}

showMessage(channel) : Observable<any>{
 // return this.http.get("https://chat.twilio.com/v2/Services/IS8b9188e1f58e439b94915110ee3afb4e/channels/CH11a0ea120dec438c9d1880527ed00e5d/messages", httpOptions);
  // return this.http.get('',httpOptions)
  //return this.http.get("https://chat.twilio.com/v2/Services/"+this.ServiceId+"/Channels/"+this.channelId+"/Messages",httpOptions).pipe(map(data=>data));
  return this.http.get(channel.links.messages, httpOptions)
}

// joinCh(channels) :  Observable<any>{
//   const body= new HttpParams().set('ChannelSid', channels.ServiceId).set('ServiceSid', channels.Sid).set('Identity', this.UserData.id)
//  return this.http.post(channels.links.members, body.toString(), httpOptions)
// }

joinCh(channels) : Observable<any>{
 // console.log(this.UserData)
  // const body =new HttpParams().set('ChannelSid', channels.ServiceId).set("ServiceSid", channels.Sid).set("Identity",localStorage.getItem('id'));
  const body =new HttpParams().set('ChannelSid', channels.ServiceId).set("ServiceSid", channels.Sid).set("Identity",this.UserData.id);
  return this.http.post(channels.links.members,body.toString(), httpOptions)
}

}

const httpOptions = {
headers: new HttpHeaders({
  'Content-Type':  'application/x-www-form-urlencoded',
  'Authorization': 'Basic QUM5YzEzZGQyNjFhZjNiOWEyZjg4NDQwZmNjMTc4ZjYxYzphMGZmN2RkYmQ0OThhNTNmYTFlNDIwMGVhMDViNzljOA=='
})

}


