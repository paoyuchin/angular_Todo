import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Todo } from '../../modules/Todos';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // dynamic classes
  setCalsses(){
    let classes = {
      todo:true,
      'is-complete': this.todo.completed
    };
    return classes;
  }
  li_content(){
    let classes1 = {
      li_content: true,
      'done': this.todo.completed
    };
    return classes1;
  }
  onToggle(todo){
    //toggle in UI
    todo.completed = !todo.completed
    console.log('toggle', todo);
    //toggle on Server
    // this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  };

  onDelete(todo){
    console.log('delte');
    this.deleteTodo.emit(todo);
  }
}
