import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { taskResponse } from 'src/interfaces/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskFinishService {

  url = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }

  listTaskFinish(): Observable<taskResponse[]> {
    return this.http.get<taskResponse[]>(this.url + "/finish");
  }

}
