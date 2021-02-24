import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { WatchCommentsComponent } from './components/watch-comments/watch-comments.component';

const routes: Routes = [
  {path:'add',component:AddCommentComponent},
  {path:'edit/:id',component:AddCommentComponent},
  {path:'watch/:id',component:WatchCommentsComponent},
  {path:'',component:ListCommentsComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
