import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  public judul = [];
  public isi = [];
  public tgl = [];
  public isfav = [];

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
    this.judul[i] = x;
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

  public addNote(j, isi, t)
  {
    this.judul.push(j);
    this.isi.push(isi);
    this.tgl.push(t);
  }

}