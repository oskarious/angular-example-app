import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthedGuard } from './guards/is-authed.guard';
import { LandingComponent } from './landing/pages/landing/landing.component';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./artist/artist.module').then((m) => m.ArtistModule),
    canMatch: [isAuthedGuard],
  },
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
