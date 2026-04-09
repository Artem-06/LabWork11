import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Gallery } from './components/gallery/gallery';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: Main },
  { path: 'gallery', component: Gallery },
];
