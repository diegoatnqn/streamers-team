import config from './config/config';
import { Injectable } from '@angular/core';
import * as request from 'request';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { json } from 'body-parser';
import { JsonObjectExpression } from 'typescript';


@Injectable({
  providedIn: 'root',
})
export class EpisodiosService {
  private base_url: any = config.server.port || 'https://5666c9b120b2.ngrok.io';
  
  constructor(private http: HttpClient) { }


  public getEpisodios() {
    const episodios = [
      {
        code: 0,
        descripcion: "Descripcion actual de youtube",
        titulo: "Titulo 1",
        url: "youtube.com",
        thumbnail: "https://picsum.photos/200/200.jpg"
      },
      {
        code: 1,
        descripcion: "Descripcion actual de youtube",
        titulo: "Titulo 2",
        url: "youtube.com",
        thumbnail: "https://picsum.photos/200/200.jpg"
      },
      {
        code: 2,
        descripcion: "Descripcion actual de youtube",
        titulo: "Titulo 3",
        url: "youtube.com",
        thumbnail: "https://picsum.photos/200/200.jpg"
      },
      {
        code: 3,
        descripcion: "Descripcion actual de youtube",
        titulo: "Titulo 4",
        url: "youtube.com",
        thumbnail: "https://picsum.photos/200/200.jpg"
      }
    ];
    return episodios;

    //Con API: return this.http.get<JSON>('/api/episodios/get/episodios'); //this.base_url + 
  }

}
