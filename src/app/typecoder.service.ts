import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypecoderService {

  constructor(private _httpClient:HttpClient) { }
  gettypecoders():Observable<any>{
    return this._httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }
}
