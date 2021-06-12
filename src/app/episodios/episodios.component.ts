import { Component, OnInit } from '@angular/core';
import { EpisodiosService } from '../get-episodios.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {
  episodios: Array<any> = [];

  constructor(private serviceEp: EpisodiosService) {
    this.episodios = this.serviceEp.getEpisodios(); //Con API es con subscribe
  }

  ngOnInit(): void {
  }

}
