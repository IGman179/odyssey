import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForumService } from '../forum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.scss']
})
export class AddForumComponent implements OnInit {

  serverError: string = '';
  priority = [
    {
      name: 'Low', value: 1
    },
    {
      name: 'Middle', value: 2
    },
    {
      name: 'High', value: 3
    }
  ];

  addTodoForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private forumService: ForumService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.addTodoForm = this.fb.group({
      name: ['', [Validators.required]],
      text: ['', [Validators.required]],
      priority: ['', [Validators.required]]
    })
  }

  addTodo() {
    this.forumService.addTodo(this.addTodoForm.value)
      .then((res)=> {
        console.log(res);
        this.router.navigate(['./forum']);
      })
      .catch((er) => {
        console.log(er);
        this.serverError = er.message;
      });
  }

}