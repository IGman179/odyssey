import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Priority } from '../forum.model';

@Component({
  selector: 'app-list-forum',
  templateUrl: './list-forum.component.html',
  styleUrls: ['./list-forum.component.scss']
})
export class ListForumComponent implements OnInit {

  subscription;
  readonly labelPriority = Priority;
  todos;
  
  constructor(
    private formService: ForumService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.subscription = this.formService.getAllTodos(user.uid).subscribe(res => {
        this.todos = res;
        console.log(res);
      });
    })
  }

  removeTodo(id) {
    this.formService.removeTodo(id);
  }

  updateStateTodo(todo) {
    this.formService.updateStateTodo(todo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
