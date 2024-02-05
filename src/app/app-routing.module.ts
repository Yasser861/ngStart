import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { NoFoundComponent } from './no-found/no-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'home'},
  {path:'about',component:AboutComponent,title:'about'},
  {path:'contact',component:ContactComponent,title:'contact'},
  {path:'portofolio',component:PortofolioComponent,title:'portofolio'},
  {path:'**',component:NoFoundComponent,title:'Error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
