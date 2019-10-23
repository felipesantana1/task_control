import { Injectable } from '@angular/core';
import { allTasks as tasks } from '../assets/data/tasks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskControlService {

  allTasks = tasks;

  globalTaskCount = 0;
  personalTaskCount = 0;

  constructor() { }
  
  getJsonData() {
    return this.allTasks
  }

  addNew(data,){
    this.allTasks.tasks.push(data);
  }

  taskComplete(task){
    for(let i of this.allTasks.tasks){
      if(i === task) i.isCompleted = true;
    }
  }

  gbTasksUp(){
    this.globalTaskCount += 1
  }
  
  prTasksUp(){
    this.personalTaskCount += 1
  }

  gbTasksDown(){
    this.globalTaskCount -= 1;
  }

  prTasksDown(){
    this.personalTaskCount -= 1
  }
}
