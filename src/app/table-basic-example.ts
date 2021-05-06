import {Component} from '@angular/core';

export interface PeriodicElement {
  nombre_encargado: string;
  carrera: string;
  fecha: string; //Sí, debería ser tipo 'Date' pero lo dejé en string para no gastar mucho tiempo en diseño
  estado: string;
  revisar_propuesta: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre_encargado: 'Mariana', carrera: 'Ing. civil Electrica', 
  fecha: '2020-04-20', estado: 'Pendiente', revisar_propuesta: 'Revisar'},
  {nombre_encargado: 'Luis', carrera: 'Ing. civil Industrial', 
  fecha: '2020-06-28', estado: 'Pendiente', revisar_propuesta: 'Revisar'},
  {nombre_encargado: 'Rodrigo', carrera: 'Ing. civil Computación', 
  fecha: '2020-07-12', estado: 'Aprobada', revisar_propuesta: ''},
  {nombre_encargado: 'Mariana', carrera: 'Ing. civil Electrica', 
  fecha: '2020-03-02', estado: 'Rechazada', revisar_propuesta: 'Visualizar'}
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
  displayedColumns: string[] = ['nombre_encargado', 'carrera', 'fecha', 'estado', 'revisar_propuesta'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */