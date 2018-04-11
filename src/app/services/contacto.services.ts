import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Contacto } from '../models/Contacto';


import { QueryFn } from 'angularfire2/database/interfaces';
 
@Injectable()
export class ContactoService { 
 
  private dbPath = '/contactos';
 
  contactosRef: AngularFireList<Contacto> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.contactosRef = db.list(this.dbPath);
  }
 
  crearContacto(contacto: Contacto): void {
    this.contactosRef.push(contacto);
  }
 
  getContactosList(): AngularFireList<Contacto> {
    return this.contactosRef;
  }
 
  private handleError(error) {
    console.log(error);
  }
}