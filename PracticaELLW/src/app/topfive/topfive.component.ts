import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlistatopComponent } from '../llistatop/llistatop.component';

@Component({
  selector: 'app-topfive',
  standalone: true,
  imports: [CommonModule, LlistatopComponent],
  templateUrl: './topfive.component.html',
  styleUrl: './topfive.component.css'
})
export class TopfiveComponent {

}
