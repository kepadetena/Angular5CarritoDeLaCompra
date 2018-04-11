import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { ContactoService } from './services/contacto.services';
import { InsertarService } from './services/insertar.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cookieValue = 'Anil Singh';

  save_localstorage () {
    let name: string="Borja";

    let person = {
      name: "Adri",
      age: 22,
      profesion: "it developer"
    }

    localStorage.setItem("name", name);
    localStorage.setItem("person", JSON.stringify( person ));

  }

  save_sessionstorage () {
    let name: string="Gabumon";

    let person = {
      name: "Agumon",
      age: 18,
      profesion: "Digimon"
    }

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("person", JSON.stringify( person ));

  }

  constructor( private cookieService: CookieService, private insertarService: InsertarService, private contactoService: ContactoService ){
    this.save_localstorage();
    this.save_sessionstorage();
   }

  ngOnInit(): void {
    //Set cookies
    
    //Get Cookies
    

    // //Check Cookies
    // const IsCookieExists: boolean = this.cookieService.check('cookieApp');

    // //Get Cookies
    // const value: string = this.cookieService.get('cookieApp');

    // //Get all cookies
    // const allCookies: {} = this.cookieService.getAll();

    // //delete cookies
    // this.cookieService.delete('cookieApp');

    // //delete all cookies
    // this.cookieService.deleteAll();
  }

}
