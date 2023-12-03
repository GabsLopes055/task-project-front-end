import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { taskRequest, taskResponse } from 'src/interfaces/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksInProgressService {

  url = environment.baseURL;

  constructor(private http: HttpClient) { }

  public listTasksPending(): Observable<taskResponse[]>{
    return this.http.get<taskResponse[]>(this.url + "/pending");
  }

  public deleteTask(cdId: number): Observable<void> {
    return this.http.delete<any>(this.url + cdId);
  }

}
