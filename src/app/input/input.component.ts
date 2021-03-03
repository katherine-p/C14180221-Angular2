import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { GlobalvarService } from './../globalvar.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public globalvar: GlobalvarService) 
  {
    this.arr_judul = this.globalvar.getJudul();
    this.arr_isi = this.globalvar.getIsi();
    this.arr_tgl = this.globalvar.getTgl();
    this.count = this.globalvar.getLen();
  }

  in_judul:string;
  in_isi:string;
  in_tgl:Date;
  arr_judul = [];
  arr_isi = [];
  arr_tgl = [];
  count = 0;

  addnote()
  {
    this.globalvar.addNote(this.in_judul, this.in_isi, this.in_tgl);
  }

  seedetail(i)
  {
    this.router.navigate(["/detail/" + i]);    
  }

  ngOnInit() {
  }

}