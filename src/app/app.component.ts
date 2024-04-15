import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CIPYesha';

  constructor(private router:Router){}

  redirigir(nombre:String):void{
    this.router.navigate(['$nombre']);
  }
}
