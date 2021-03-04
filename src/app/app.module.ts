import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { DetailComponent } from './detail/detail.component';
import { FavComponent } from './fav/fav.component';

import { RouterModule, Routes } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

const ROUTES : Routes = [
  { path : 'input', component: InputComponent },
  { path : 'detail', component: DetailComponent },
  { path : 'fav', component: FavComponent },
  { path : 'detail/:index', component: DetailComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, InputComponent, DetailComponent, FavComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]
})
export class AppModule { }
