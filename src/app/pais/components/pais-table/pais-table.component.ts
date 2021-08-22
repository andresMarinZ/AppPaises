import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.scss']
})
export class PaisTableComponent implements OnInit {
  @Input()paises:Paises[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
