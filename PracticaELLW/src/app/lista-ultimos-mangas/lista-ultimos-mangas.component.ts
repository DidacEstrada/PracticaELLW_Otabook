import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllMangasComponent} from '../all-mangas/all-mangas.component';

@Component({
  selector: 'app-lista-ultimos-mangas',
  standalone: true,
  imports: [CommonModule, AllMangasComponent],
  templateUrl:'./lista-ultimos-mangas.component.html',
  styleUrl: './lista-ultimos-mangas.component.css'
})

export class ListaUltimosMangasComponent {
}
