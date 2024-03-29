import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkilssComponent } from './skilss/skilss.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'skills', component:SkilssComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
