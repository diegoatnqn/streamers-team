import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../get-usuarios.service';
//import { GetTwitchService } from '../get-twitch.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-twitch',
  templateUrl: './app-twitch.component.html',
  styleUrls: ['./app-twitch.component.css']
})
export class AppTwitchComponent implements OnInit {

  miembros: Array<any> = [];
  vivos: Array<any> = [];

  constructor(private service: UsuarioService,/* private api: GetTwitchService,*/ private router: Router) {
    }   
  
  ngOnInit(): void {
    this.miembros= this.service.getMiembros();
    
  }

  prueba(user: string) {
    this.router.navigateByUrl("www.twitch.tv/" + user);
  }

}
