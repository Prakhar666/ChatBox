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
  UserData: any;

  constructor(private http:HttpClient) { }

  addchnl :string;
  adduser : string;
  sendmsg : string;
  showmsg;

getDetail() : Observable<any>
{
  const body = new HttpParams().set('FriendlyName','Prakhar')
  return this.http.post(this.url,body.toString(), httpOptions)
}


setData() : Observable<any>
{
  return this.http.post(this.url,"FriendlyName = Prakhar", httpOptions);
}


displayChannel() : Observable<any>
{
  return this.http.get('https://chat.twilio.com/v2/Services/IS3f0e8941420341428b82f6e652f58dc9/Channels', httpOptions);
}


addChannel(addchnl ) : Observable<any>
{
  const body=new HttpParams().set('UniqueName', addchnl);
  return this.http.post(this.channel, body.toString(), httpOptions);
}


addUser(adduser) : Observable<any>
{
  return this.http.get("https://chat.twilio.com/v2/Services/IS3f0e8941420341428b82f6e652f58dc9/users"+adduser, httpOptions);
}


sendMessage(sendmsg, member) : Observable<any>
{
  const body=new HttpParams().set('ChannelSid',member.service_id).set('ServiceSid',member.sid).set('Body',sendmsg).set('From', localStorage.getItem('id'))
  return this.http.post(member.links.messages,body.toString(),httpOptions);
}


showMessage(channel) : Observable<any>
{
  return this.http.get(channel.links.messages, httpOptions)
}


joinCh(channels) : Observable<any>
{
  const body =new HttpParams().set('ChannelSid', channels.ServiceId).set("ServiceSid", channels.Sid).set("Identity", localStorage.getItem('id'));
  return this.http.post(channels.links.members,body.toString(), httpOptions)
}

}

const httpOptions = {
headers: new HttpHeaders({
  'Content-Type':  'application/x-www-form-urlencoded',
  'Authorization': 'Basic QUM5YzEzZGQyNjFhZjNiOWEyZjg4NDQwZmNjMTc4ZjYxYzphMGZmN2RkYmQ0OThhNTNmYTFlNDIwMGVhMDViNzljOA=='
})

}


