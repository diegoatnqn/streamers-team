import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  episodios: boolean = false;
  inicio: boolean = true;
  title = 'miApp';

  toggleEps() {
    this.episodios = !this.episodios;
    this.inicio = false;
  }
  toggleInicio() {
    this.inicio = true;
    this.episodios = false;
  }
  


}
