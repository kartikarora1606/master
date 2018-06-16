import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  @Input() searchedAlbums : any[];
  
  SelectedAlbum : any;
  showSearchResultDetails : boolean = false;
  constructor() { this.showSearchResultDetails = false; }
  ngOnInit() {
    this.showSearchResultDetails = false;
  }
  onSelectAlbum(album:any){
    this.SelectedAlbum = album;
    this.showSearchResultDetails = true;
  }
  BackToSearch(){
    this.showSearchResultDetails = false;
  }
 
}
