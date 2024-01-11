import { Routes } from '@angular/router';
import { MangaComponent } from './manga/manga.component';
import { PrincipalComponent } from './principal/principal.component';
import { MangaBusquedaComponent } from './manga-busqueda/manga-busqueda.component';


export const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: ':titulo', component: MangaComponent},
  {path: 'busqueda/:buscado', component: MangaBusquedaComponent}
];
