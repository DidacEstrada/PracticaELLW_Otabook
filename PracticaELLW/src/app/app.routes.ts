import { Routes } from '@angular/router';
import { MangaComponent } from './manga/manga.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaMangasComponent } from './lista-mangas/lista-mangas.component';
import { MangaBusquedaComponent } from './manga-busqueda/manga-busqueda.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: ':titulo', component: MangaComponent},
  {path: 'listar/Mangas', component: ListaMangasComponent},
  {path: 'busqueda/:buscado', component: MangaBusquedaComponent},
  {path: 'contacto/Otabook', component: ContactoComponent}
];
