import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToptunesComponent } from './toptunes/toptunes.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlbumdetailComponent } from './albumdetail/albumdetail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchresultsComponent } from './searchresults/searchresults.component';



@NgModule({
  declarations: [
    AppComponent,
    ToptunesComponent,
    AlbumdetailComponent,
    SearchresultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
