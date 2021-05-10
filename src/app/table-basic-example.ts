import {Component} from '@angular/core';

export interface PeriodicElement {
  nombre_encargado: string;
  carrera: string;
  rol: string;
  estado_cuenta: string;
  editar_estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre_encargado: 'Mariana', carrera: 'Ing. civil Electrica', 
  rol: 'Alumno/a', estado_cuenta: 'Habilitada', editar_estado: 'Deshabilitar'},
  {nombre_encargado: 'Luis', carrera: 'Ing. civil Industrial', 
  rol: 'Alumno/a', estado_cuenta: 'Deshabilitada', editar_estado: 'Habilitar'},
  {nombre_encargado: 'Rodrigo', carrera: 'Ing. civil Computación', 
  rol: 'Encargado/a de carrera', estado_cuenta: 'Habilitada', editar_estado: 'Deshabilitar'},
  {nombre_encargado: 'Mariana', carrera: 'Ing. civil Electrica', 
  rol: 'Encargado/a de carrera', estado_cuenta: 'Habilitada', editar_estado: 'Deshabilitar'}
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
  displayedColumns: string[] = ['nombre_encargado', 'carrera', 'rol', 'estado_cuenta', 'editar_estado'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */