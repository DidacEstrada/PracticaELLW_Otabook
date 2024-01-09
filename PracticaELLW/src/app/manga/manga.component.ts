import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CapsaleraComponent } from '../capsalera/capsalera.component';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [CommonModule, CapsaleraComponent, RouterOutlet],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css'
})
export class MangaComponent implements OnInit{

    titulo: string | undefined;
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe(params =>{
        this.titulo = params['titulo'];
      });

    }


}
