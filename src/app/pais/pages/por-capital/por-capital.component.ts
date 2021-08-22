import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {

  public termino:string = "";
  public hayError:Boolean = false;
  public paises:any[] = [];

  constructor(private pais:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    
    this.pais.buscarCapital(
      termino).subscribe(paises => {
      this.paises = paises;
    },(error:any) =>{
      this.hayError = true;
      this.paises = [];
    });
  }


}
