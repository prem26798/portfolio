import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent  } from './education/education.component';

const routes: Routes = [
  {path: 'home', component:ContentComponent},
  {path: 'education', component: EducationComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component : ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
