import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MangaComponent } from './manga/manga.component';
import { TopfiveComponent } from './topfive/topfive.component';


export const routes: Routes = [
  { path: '', component: TopfiveComponent },
  {path: ':titulo', component: MangaComponent}
];
