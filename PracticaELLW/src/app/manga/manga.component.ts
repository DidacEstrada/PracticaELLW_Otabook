import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapsaleraComponent } from '../capsalera/capsalera.component';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [CommonModule, CapsaleraComponent],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css'
})
export class MangaComponent {

}
