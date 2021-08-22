import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap } from "rxjs/operators";
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais!:Paises;

  constructor( private activateRoute:ActivatedRoute,
              private paisService:PaisService) { }

  ngOnInit(): void {
    // this.activateRoute.params.subscribe( ({id}) => {
    //   this.pais.getPaisPorAlpha(id).subscribe(pais =>{
    //     console.log(pais);
    //   })
    // });
    this.activateRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha( id)),
      tap(console.log)
    )
    .subscribe( pais => this.pais = pais);
  }

}
