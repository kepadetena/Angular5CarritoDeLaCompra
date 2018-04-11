import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-ruta-detail',
  templateUrl: './ruta-detail.component.html',
  styleUrls: ['./ruta-detail.component.css']
})
export class RutaDetailComponent implements OnInit {
  rutaObservable: Observable<any[]>;
  _id: number;
  constructor( private db: AngularFireDatabase, private route: ActivatedRoute) {  }

  ngOnInit() {
    this._id = this.route.snapshot.params["id"];
    this.rutaObservable=this.getRutasId('/rutas');
    
  }

  getRutasId( listPath){
    return this.db.list(listPath).valueChanges();
}

}