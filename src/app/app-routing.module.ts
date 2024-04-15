import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioPruebaComponent } from './servicio-prueba/servicio-prueba.component';

const routes: Routes = [
  { path:'', component:InicioComponent  },
  { path:'servicios', component:ServiciosComponent  },
  { path:'capacitacion', component:CapacitacionComponent  },
  { path:'nosotros', component:NosotrosComponent  },
  { path:'clientes', component:ClientesComponent  },
  { path:'testimonios', component:TestimoniosComponent  },
  { path:'servicio-prueba', component:ServicioPruebaComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
