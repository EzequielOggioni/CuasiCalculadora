import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sumadora } from '../../sumadora';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  sumadora:Sumadora;
  public mostrarDetalle:boolean = false;
  /**
   *
   */
  constructor() {
    this.sumadora = new Sumadora();
  }
  
}
