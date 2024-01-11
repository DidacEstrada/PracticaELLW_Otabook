import { Routes } from '@angular/router';
import { MangaComponent } from './manga/manga.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaMangasComponent } from './lista-mangas/lista-mangas.component';


export const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: ':titulo', component: MangaComponent},
  {path: 'listar/Mangas', component: ListaMangasComponent},
  {path: 'busqueda/:buscado', component: ListaMangasComponent}
];
