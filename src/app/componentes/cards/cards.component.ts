import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  mostrarDiv!:boolean;
  nombre="Activar";
  mostar( check:HTMLInputElement){
    this.mostrarDiv=true;
    this.nombre="Desactivar"
    if(check.checked==false){
      this.mostrarDiv=false;
      this.nombre="Activar";
    }
  }
}
