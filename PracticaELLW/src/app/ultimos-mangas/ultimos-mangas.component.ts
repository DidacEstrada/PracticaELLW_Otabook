import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUltimosMangasComponent } from '../lista-ultimos-mangas/lista-ultimos-mangas.component';

@Component({
  selector: 'app-ultimos-mangas',
  standalone: true,
  imports: [CommonModule, ListaUltimosMangasComponent],
  templateUrl: './ultimos-mangas.component.html',
  styleUrl: './ultimos-mangas.component.css'
})
export class UltimosMangasComponent {

}
