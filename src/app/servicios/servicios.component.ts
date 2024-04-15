import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  
  constructor(private router:Router){}

  onClick(){
    this.router.navigateByUrl('/servicio-prueba');
  }

}
