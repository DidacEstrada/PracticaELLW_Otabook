import { Component } from '@angular/core';
import { NovedadesComponent } from '../novedades/novedades.component';
import { CommonModule } from '@angular/common';
import { UltimosMangasComponent } from '../ultimos-mangas/ultimos-mangas.component';
import { TopfiveComponent } from '../topfive/topfive.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NovedadesComponent, CommonModule, UltimosMangasComponent, TopfiveComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
