import { Component, OnInit } from '@angular/core';
import {TunesService} from '../tunes.service';
import { SearchItem,Entry,Feed,RootObject,Title2 } from '../SearchItem';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-toptunes',
  templateUrl: './toptunes.component.html',
  styleUrls: ['./toptunes.component.css']
})
export class ToptunesComponent implements OnInit {
  searchItem : Entry[];
  singleSearchItem : Entry;
  feed : Feed;
  rootObj : RootObject;
  //title2 : Title2;
  title : string ="test";
  selectedAlbum : Entry;
  constructor(private tunesService : TunesService,private spinner: NgxSpinnerService) { }
  showAlbumDetails : boolean = true;
  searchedAlbums : any[] = [];
  routedFromSearch : boolean = false;
  showCompleteList : boolean = false;
  albumName : string;
  showSearchResult : boolean = true;
  ngOnInit() {
    this.spinner.show();
    this.showCompleteList = false;
    this.showAlbumDetails = true;
    this.showSearchResult = true;
    this.routedFromSearch = false;
    
    this.getTopAlbums();
  }
  getTopAlbums(){
    console.log("Fecting Albums");
    this.tunesService.getTopTunes().subscribe(data =>{
      console.log("Fetched Albums");
      this.feed = data['feed'];
      this.title = this.feed.title.label;
      this.searchItem = this.feed.entry;
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 2000);     
  }
  
  }
  onSelectAlbum(album : Entry) : void{
    this.selectedAlbum = album;
    this.showAlbumDetails = false;
    this.showCompleteList = true;
    this.showSearchResult = true;
   
  }
  ChangeVisibility(){
    if(this.routedFromSearch == true)
    {
      this.showAlbumDetails = true;
      this.showCompleteList = true;
      this.showSearchResult = false;
      this.routedFromSearch = false;
    }
    else {
      this.showAlbumDetails = true;
      this.showSearchResult = true;
      this.showCompleteList = false;
    }
  }




  OnEnterPressed(value : string){
    if(value == null || value.trim()=='')
    {
      alert("Please enter alteast one character to search");
      return;
    }
    this.albumName  = "";
    this.searchedAlbums = [];
    this.searchItem.forEach(element => {
      this.albumName = element['im:name'].label.toString();
      if(this.albumName.toLowerCase().startsWith(value.toLowerCase()))
      {
        this.searchedAlbums.push(element);
        console.log("pushed");
      }
    });
    if(this.searchedAlbums != null && this.searchedAlbums.length > 0)
    {
        this.routedFromSearch = true;
        console.log("Search Result Found");        
        this.ChangeVisibility();
    }
    else{
      alert("No results found");
    }    
  }
}
