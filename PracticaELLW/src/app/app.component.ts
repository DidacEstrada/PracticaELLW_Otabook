import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CapsaleraComponent } from './capsalera/capsalera.component';
import { TopfiveComponent } from './topfive/topfive.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { UltimosMangasComponent } from './ultimos-mangas/ultimos-mangas.component';
import { ListaUltimosMangasComponent } from './lista-ultimos-mangas/lista-ultimos-mangas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CapsaleraComponent, TopfiveComponent, NovedadesComponent, UltimosMangasComponent, ListaUltimosMangasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaELLW';
}
