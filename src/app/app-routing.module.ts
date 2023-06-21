import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavComponent } from './pages/fav/fav.component';
import { RecentComponent } from './pages/recent/recent.component';

const routes: Routes = [
  { path: 'favourite', component: FavComponent },
  { path: 'recent', component: RecentComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
