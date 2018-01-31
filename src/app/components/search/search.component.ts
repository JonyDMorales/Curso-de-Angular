import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  	selector: 'app-search',
 	templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {

	heroes:Heroe[] = [];
  	
  	constructor(private _heroesService: HeroesService,
  				private _activatedRoute: ActivatedRoute) { }

  	ngOnInit() {
  		
  		this._activatedRoute.params.subscribe( params =>{
  			let termino:string = params.arr;
			this.heroes = this._heroesService.searchHeroe(termino);
		});
  	}

}
