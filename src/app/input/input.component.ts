import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) 
  {

  }

  in_judul:string;
  in_isi:string;
  in_tgl:Date;

  addnote()
  {

  }

  ngOnInit() {
  }

}