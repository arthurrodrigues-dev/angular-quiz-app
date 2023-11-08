import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-form', component: CreateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
