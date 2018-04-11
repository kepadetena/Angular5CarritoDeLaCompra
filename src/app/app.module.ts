import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './ruteo/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { RutasComponent } from './rutas/rutas.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { ContactoService } from './services/contacto.services';
import { InsertarService } from './services/insertar.services';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { RutaDetailComponent } from './ruta-detail/ruta-detail.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { FestivalesComponent } from './festivales/festivales.component';
import { ParaisosComponent } from './paraisos/paraisos.component';
import { AuthGuard } from './guards/auth.guard';
import { ReservaComponent } from './reserva/reserva.component';
import { CarritoComponent } from './carrito/carrito.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: 'login',
  component: LoginComponent },
  {
    path: 'rutas',
    component: RutasComponent,
    data: { title: 'Rutas' }
  },
  {
    path: 'insertar',
    component: InsertarComponent,
    data: { title: 'Insertar' },
    canActivate: [AuthGuard]
  },
  {
    path: 'contactos',
    component: ContactoComponent,
    data: { title: 'Contacto' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'email-login',
  component: EmailComponent
  },
  { path: 'detalles/:id',
  component: RutaDetailComponent
  },
  { path: 'signup',
  component: SignupComponent
  },
  { path: 'festivales',
  component: FestivalesComponent
  },
  { path: 'paraisos',
  component: ParaisosComponent
  },
  { path: 'ciudades',
  component: CiudadesComponent
  },
  { path: 'reserva/:id',
  component: ReservaComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  { path: '**',
  component: ErrorComponent,
  data: { title: 'Error' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    InsertarComponent,
    RutasComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    RutaDetailComponent,
    CiudadesComponent,
    FestivalesComponent,
    ParaisosComponent,
    ReservaComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  providers: [  CookieService, InsertarService, ContactoService, AuthService, AuthGuard ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{ }