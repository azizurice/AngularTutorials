import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'parent', component: ParentComponent},
  {path:'about', component: AboutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
