import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { GlobalvarService } from './../globalvar.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public globalvar: GlobalvarService) 
  {
    this.arr_judul = this.globalvar.getJudul();
    this.arr_isi = this.globalvar.getIsi();
    this.arr_tgl = this.globalvar.getTgl();
    this.arr_fav = this.globalvar.getisFav();
    this.count = this.globalvar.getLen();

  }

  arr_judul = [];
  arr_isi = [];
  arr_tgl = [];
  arr_fav = [];
  count = 0;
  judul_fav = [];
  c = 0;

  ngOnInit() {
    for(var i = 0; i < this.count; i++)
    {
      if(this.arr_fav[i]==true)
      {
        this.judul_fav[this.c] = this.arr_judul[i];
        this.c++;
      }      
    }
  }

  seedetail(i)
  {
    this.router.navigate(["/detail/" + i]);    
  }

}