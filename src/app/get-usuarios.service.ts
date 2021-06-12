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
export class UsuarioService {
  private base_url: any = config.server.port || 'https://5666c9b120b2.ngrok.io';
  private AT = '';
  constructor(private http: HttpClient) { }


  public getMiembros() {
    const miembros = [
      {
        code: 0,
        username: "usuario 1",
        twitch_id: 999,
        descripcion: "Mi descripcion n1",
        channel_name: "NombreCanal 1"
      },
      {
        code: 1,
        username: "usuario 2",
        twitch_id: 9992,
        descripcion: "Mi descripcion n2",
        channel_name: "NombreCanal 2"
      },
      {
        code: 2,
        username: "usuario 3",
        twitch_id: 9993,
        descripcion: "Mi descripcion n3",
        channel_name: "NombreCanal 3",
        live: true //Este tiene TRUE simula llamado a api de twitch y respuesta que el canal esta en vivo
      }
    ];
    return miembros;
    // CON API: return this.http.get<JSON>('/api/usuarios/get/usuarios'); 
  }

}
