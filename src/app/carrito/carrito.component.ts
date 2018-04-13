import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  rutaObservable: Observable<any[]>;
  allCookies: any = this.cookieService.getAll();
  prec:number=0;
  total:number =0;
  carrito= []
  
  constructor(private cookieService: CookieService,private db: AngularFireDatabase) { }

  ngOnInit() {
    
 
    for (const key in this.allCookies) {
      this.carrito.push(JSON.parse(this.cookieService.get(key)));
      this.prec=parseFloat(JSON.parse(this.cookieService.get(key)).precio)*parseFloat(JSON.parse(this.cookieService.get(key)).cantidad)
      this.total=this.total+this.prec;
    }
    console.log(this.carrito);
    
  }
  
  getRutas(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  borrarviaje(id){
    this.cookieService.delete(id);
    window.location.reload(true);
  }

  vaciarcarrito(){
    this.cookieService.deleteAll;
    window.location.reload(true);
  }
}


  
