import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MangaService } from '../manga.service';

@Component({
  selector: 'app-manga-busqueda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manga-busqueda.component.html',
  styleUrl: './manga-busqueda.component.css'
})


export class MangaBusquedaComponent {
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
