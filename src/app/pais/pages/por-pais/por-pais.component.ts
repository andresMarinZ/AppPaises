import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {

  public termino:string = "";
  public hayError:Boolean = false;
  public paises:Paises[] = [];
  public paisesSugeridos:Paises[] = [];
  public mostrarSugerencias:Boolean = false;
  constructor(private pais:PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino:string ){
    console.log(termino);
    this.hayError = false;
    this.termino = termino;
    this.pais.buscarPais(
      termino).subscribe(paises => {
      this.paises = paises;
    },(error:any) =>{
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias( termino:string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
   
    this.pais.buscarPais( termino )
    .subscribe( 
      paises => this.paisesSugeridos = paises.splice(0,5),
      err => {
        this.paisesSugeridos = []
        this.mostrarSugerencias = false;
      });
  };

  buscarSugerido( termino:string ){
    this.buscar( termino );
    this.mostrarSugerencias = false;
  }


}
