import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AllMangasComponent } from '../all-mangas/all-mangas.component';
import{ MangaService } from '../manga.service';

@Component({
  selector: 'app-lista-mangas',
  standalone: true,
  imports: [CommonModule, AllMangasComponent],
  templateUrl:'./lista-mangas.component.html',
  styleUrl: './lista-mangas.component.css'
})

export class ListaMangasComponent implements OnInit {
  generos: string[] = ['Todos', 'Comedia', 'Accion', 'Escolar', 'Seinen', 'Misterio'];
  generoSeleccionado: string = 'Todos';
  ultimosMangas: any[] = [];

  constructor(private mangaService: MangaService) {}

  ngOnInit(): void {
    this.actualizarMangaPorGenero();
  }

  async actualizarMangaPorGenero(): Promise<void> {
    try {
      if (this.generoSeleccionado === 'Todos') {
        this.ultimosMangas = await this.mangaService.getMangues();
      } else {
        this.ultimosMangas = await this.mangaService.getMangaDataByGeneres([this.generoSeleccionado]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  cambiarGenero(event: Event, genero: string): void {
    event.preventDefault();
    this.generoSeleccionado = genero;
    this.actualizarMangaPorGenero();
  }
}
