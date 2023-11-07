import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { taskRequest, taskResponse } from 'src/interfaces/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = environment.baseURL;

  constructor(
    private http: HttpClient,
    private message: MatSnackBar
  ) { }


  public saveTask(task: taskRequest): Observable<taskResponse> {
    return this.http.post<taskResponse>(this.url, task)
  }

}
