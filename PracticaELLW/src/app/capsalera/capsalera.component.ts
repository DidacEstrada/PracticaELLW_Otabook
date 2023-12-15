import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavcapsaleraComponent } from '../navcapsalera/navcapsalera.component';
import { BusquedaComponent } from '../busqueda/busqueda.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-capsalera',
  standalone: true,
  imports: [CommonModule, NavcapsaleraComponent, LogoComponent, BusquedaComponent],
  templateUrl: './capsalera.component.html',
  styleUrl: './capsalera.component.css'
})
export class CapsaleraComponent {

}
