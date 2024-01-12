import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextoNovedadesComponent } from '../texto-novedades/texto-novedades.component';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CommonModule, TextoNovedadesComponent],
  templateUrl:'./novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent {

}
