import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MangaService } from '../manga.service';

@Component({
  selector: 'app-all-mangas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-mangas.component.html',
  styleUrl: './all-mangas.component.css'
})

export class AllMangasComponent implements OnInit {
  @Input() cantidadMangas?: number; // Parámetro opcional para la cantidad de mangas a mostrar
  ultimosMangas: any[] = [];

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.cargarUltimosMangas();
  }

  async cargarUltimosMangas() {
    // Pasa la cantidad de mangas al método getMangues
    this.ultimosMangas = await this.mangaService.getMangues(this.cantidadMangas);
  }
}
