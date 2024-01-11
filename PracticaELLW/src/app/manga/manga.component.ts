import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CapsaleraComponent } from '../capsalera/capsalera.component';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [CommonModule, CapsaleraComponent, RouterOutlet],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css'
})
export class MangaComponent implements OnInit{

    titulo: string | undefined;
    mangaData: any;
    constructor(private route: ActivatedRoute, private mangaService: MangaService) { }

    async ngOnInit(): Promise<void> {
      this.route.params.subscribe(params =>{
        this.titulo = params['titulo'];
      });
      if(this.titulo){
        this.mangaData = await this.mangaService.getMangaDataByTitol(this.titulo);
      }
    }
}
