import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { InsertarService } from '../services/insertar.services';
import { Insertar } from '../models/Insertar';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AngularFireDatabase]
})
export class InsertarComponent implements OnInit {
  insertar: Insertar = new Insertar();
  submitted = false;

 
  constructor(private insertarService: InsertarService, private http: HttpClient, private router: Router,
    public authService: AuthService) {}
 
  ngOnInit() {
  }
 
  nuevaRuta(): void {
    this.submitted = false;
    this.insertar = new Insertar();
  }
 
  saveRuta() {
    this.insertarService.crearRuta(this.insertar);
    this.insertar = new Insertar();
  }
 
  onSubmit() {
    this.submitted = true;
    this.saveRuta();
  }

  signOut() {
    this.authService.logout();
  }
}
