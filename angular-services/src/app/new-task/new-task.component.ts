import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  newTask: string = '';
  taskService : TaskService = inject(TaskService)



  OnCreateTask(){
    console.log(this.newTask)
    //event fire and in the service the one variable set the value of the createTask
    this.taskService.OnCreateTask(this.newTask)
  }
}
