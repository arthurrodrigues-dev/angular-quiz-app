import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { CreateQuestionsComponent } from './components/create-questions/create-questions.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create/form', component: CreateFormComponent},
  {path: 'create/questions', component: CreateQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
