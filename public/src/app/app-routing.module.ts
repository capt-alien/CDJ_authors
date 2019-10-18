import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';




const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'new', component: NewComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'show/:id', component: AuthorComponent},
  {path: '', pathMatch: 'full', redirectTo: '/'},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
