import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GlobalvarService } from './../globalvar.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, public globalvar: GlobalvarService) 
  {
    
  }

  judul_i:string;
  isi_i:string;
  tgl_i:Date;

  ngOnInit() {
    let paramdetail = this.route.snapshot.paramMap.get("index");
    this.judul_i = this.globalvar.getJudul_index(paramdetail);
    this.isi_i = this.globalvar.getIsi_index(paramdetail);
    this.tgl_i = this.globalvar.getTgl_index(paramdetail);
  }

}