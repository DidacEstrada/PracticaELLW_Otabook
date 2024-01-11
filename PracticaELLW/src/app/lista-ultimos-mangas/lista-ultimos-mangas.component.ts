import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MangaService } from '../manga.service';

@Component({
  selector: 'app-lista-ultimos-mangas',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./lista-ultimos-mangas.component.html',
  styleUrl: './lista-ultimos-mangas.component.css'
})
export class ListaUltimosMangasComponent implements OnInit {
  ultimosMangas: any[] = [];

  constructor(private mangaService: MangaService) { }
  ngOnInit(): void {
      this.cargarUltimosMangas();
  }

  async cargarUltimosMangas(){
    this.ultimosMangas = await this.mangaService.getMangues();
    this.ultimosMangas = this.ultimosMangas.slice(0, 8);
  }
}
