import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  

  constructor(private http: HttpClient) { }
  getDetail() : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Basic QUM3N2ZiOWZhZmNlNWU5OWUxMWE0OGMwNTA1NTMyZWIzYzo0MjdjNjU4ODg5NWQzODkzMjg1ZTQzMmEzNTkwOGQ5NQ=='
      })

    };
    const body = new HttpParams().set('FriendlyName','ChatRoom')
    return this.http.post('https://chat.twilio.com/v2/Services',body.toString(),httpOptions)
    
  }
}
