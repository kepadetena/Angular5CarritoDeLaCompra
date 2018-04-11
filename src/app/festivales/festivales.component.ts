import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Insertar } from '../models/Insertar';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-festivales',
  templateUrl: './festivales.component.html',
  styleUrls: ['./festivales.component.css']
})
export class FestivalesComponent implements OnInit {
  rutaObservable: Observable<any[]>;
  //selectedRuta: Insertar;

  constructor( private db: AngularFireDatabase) { }

  ngOnInit() {
  this.rutaObservable = this.getRutas('/rutas');
}
  
getRutas(listPath): Observable<any[]> {
  return this.db.list(listPath).valueChanges();
}

/**onSelect(insertar: Insertar): void {
  this.selectedRuta = insertar;
}*/
}
