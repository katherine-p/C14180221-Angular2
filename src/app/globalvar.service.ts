import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  public judul = [];
  public isi = [];
  public tgl = [];
  public isfav = [];
  public len = 0;

  constructor() { }

  public setJudul(i, x:string)
  {
    this.judul[i] = x;
  }
  public setIsi(i, x:string)
  {
    this.isi[i] = x;
  }
  public setTgl(i, x:Date)
  {
    this.tgl[i] = x;
  }
  public setIsfav(i, x:boolean = true)
  {
    this.isfav[i] = x;
  }

  public getJudul_index(i)
  {
    return this.judul[i];
  }
  public getIsi_index(i)
  {
    return this.isi[i];
  }
  public getTgl_index(i)
  {
    return this.tgl[i];
  }
  public getisFav_index(i)
  {
    return this.isfav[i];
  }

  public getJudul()
  {
    return this.judul;
  }
  public getIsi()
  {
    return this.isi;
  }
  public getTgl()
  {
    return this.tgl;
  }
  public getisFav()
  {
    return this.isfav;
  }

  public addNote(j, isi, t)
  {
    this.judul.push(j);
    this.isi.push(isi);
    this.tgl.push(t);
    this.isfav.push(false);
    this.len++;
  }

  public getLen()
  {
    return this.len;
  }

}