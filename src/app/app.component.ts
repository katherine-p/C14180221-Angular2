import { Component, VERSION } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router)
  {
    
  }
  name = 'Angular ' + VERSION.major;
  

  openInput()
  {
    this.router.navigate(["/input"]);
  }
  openFav()
  {
    this.router.navigate(["/fav"]);
  }
}
