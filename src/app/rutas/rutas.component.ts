import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { Insertar } from '../models/Insertar';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
    rutaObservable: Observable<any[]>;
    //selectedRuta: Insertar;
  
    constructor( private db: AngularFireDatabase) { }
  
    ngOnInit() {
    this.rutaObservable = this.getRutas('/rutas');
  }
    
    getRutas(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

 /* onSelect(insertar: Insertar): void {
    this.selectedRuta = insertar;
  }*/
  }
