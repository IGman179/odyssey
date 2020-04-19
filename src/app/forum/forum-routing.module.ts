import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component';
import { AddForumComponent } from './add-forum/add-forum.component';
import { ListForumComponent } from './list-forum/list-forum.component';

const routes: Routes = [
  { path: '', component: ForumComponent, children: [
    { path: '', component: AddForumComponent },
    { path: 'list-forum', component: ListForumComponent },
    { path: 'add-forum', component: AddForumComponent }
  ] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
