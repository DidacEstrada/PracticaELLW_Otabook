import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import{ MangaService } from '../manga.service';
import { AllMangasComponent } from '../all-mangas/all-mangas.component';

@Component({
  selector: 'app-manga-busqueda',
  standalone: true,
  imports: [CommonModule, AllMangasComponent],
  templateUrl: './manga-busqueda.component.html',
  styleUrl: './manga-busqueda.component.css'
})


export class MangaBusquedaComponent implements OnInit {
  buscado: string = '';
  mostrarComponente: boolean = false;
  ultimosMangas: any[] = [];

  constructor(private route: ActivatedRoute, private mangaService: MangaService) {}

  ngOnInit() {
    // Obtener el parámetro 'buscado' de la URL
    this.route.params.subscribe(params => {
      this.buscado = params['buscado'];

      // Verificar si el parámetro 'buscado' está presente y no está vacío
      this.mostrarComponente = !!(this.buscado && this.buscado.trim());

      // Luego, puedes hacer lo que quieras con 'buscado', por ejemplo, llamar a un método para realizar la búsqueda.
      if (this.mostrarComponente) {
        this.realizarBusqueda();
      }

    });
  }

  async realizarBusqueda() {
    this.ultimosMangas = await this.mangaService.getMangaDataByTitolQualsevol(this.buscado);
  }
}
