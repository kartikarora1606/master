import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SearchItem,RootObject,Feed,Entry } from '../app/SearchItem';
@Injectable({
  providedIn: 'root'
})
export class TunesService {
   feed : Feed;
   rootObj : RootObject;
   entry : Entry[];
   myurl  : string = "https://itunes.apple.com/in/rss/topalbums/limit=100/json";
  constructor(private _http : HttpClient) { }
  getTopTunes() : Observable<any> {
      console.log("getting");
      
      return this._http.get<any>(this.myurl);
  }
}
