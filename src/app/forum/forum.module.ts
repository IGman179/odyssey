import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent } from './forum.component';
import { AddForumComponent } from './add-forum/add-forum.component';
import { ListForumComponent } from './list-forum/list-forum.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ForumComponent, AddForumComponent, ListForumComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
    ReactiveFormsModule
  ]
})
export class ForumModule { }
