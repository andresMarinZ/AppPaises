import { Component, OnInit } from '@angular/core';
import { tap } from "rxjs/operators";

import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva:string = '';
  paises:Paises[]=[];

  constructor(private pais:PaisService) { }

  ngOnInit(): void {
  }

  getClaseCss(region:string):String{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region:string){

    if (region === this.regionActiva) 
      return;
    

    this.regionActiva = region;
    this.paises = [];
    
    this.pais.getPaisPorRegion(region)
    .pipe(
      tap(console.log)
    )
    .subscribe( paises => this.paises= paises);
  }

}
