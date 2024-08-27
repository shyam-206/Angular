import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  //createTask: EventEmitter<string> = new EventEmitter<string>();

  createTask = new Subject<string>()

  OnCreateTask(value: string) {
    this.createTask.next(value);
  }

}
