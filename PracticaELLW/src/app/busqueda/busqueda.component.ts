import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  busqueda: string = '';
  constructor(private router: Router) { }

  buscarMangas(){
    this.router.navigate(['/busqueda', this.busqueda]);
    this.busqueda = '';
  }
}
