import { Component, OnInit, Input } from '@angular/core';
import { SearchItem, Entry, Feed } from '../SearchItem';

@Component({
  selector: 'app-albumdetail',
  templateUrl: './albumdetail.component.html',
  styleUrls: ['./albumdetail.component.css']
})
export class AlbumdetailComponent implements OnInit {

  @Input() album : Entry;
  constructor() { }

  ngOnInit() {
  }

}
