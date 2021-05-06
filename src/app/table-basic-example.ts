import {Component} from '@angular/core';

export interface PeriodicElement {
  nombre encargado: string;
  rut: string;
  empresa: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {rut: '18.756.432-6', nombre: 'Mariana', empresa: 1.0079, symbol: 'H'},
  {rut: '19.999.543-5', nombre: 'Luis', weight: 4.0026, symbol: 'He'},
  {rut: '20.543.987-5', nombre: 'Pedro', weight: 6.941, symbol: 'Li'},
  {rut: '19.656.872-5', nombre: 'Cristina', weight: 9.0122, symbol: 'Be'},
  {rut: '19.164.461-0', nombre: 'Jaqueline', weight: 10.811, symbol: 'B'}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['rut', 'nombre', 'empresa', 'symbol'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */