import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from './pages/post/post.component';
import {PostsComponent} from './pages/posts/posts.component';
import {UserComponent} from './pages/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'post/:id', component: PostComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'user/:id', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
