import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { ContactoService } from '../services/contacto.services';
import { Contacto } from '../models/Contacto';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AngularFireDatabase]
})
export class ContactoComponent implements OnInit {
  contacto: Contacto = new Contacto();
  submitted = false;

 
  constructor(private contactoService: ContactoService, private http: HttpClient, private router: Router) {}
 
  ngOnInit() {
  }
 
  nuevoContacto(): void {
    this.submitted = false;
    this.contacto = new Contacto();
  }
 
  save() {
    this.contactoService.crearContacto(this.contacto);
    this.contacto = new Contacto();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
  