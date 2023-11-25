import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { taskResponse } from 'src/interfaces/task.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }


  public listAllTasks(): Observable<taskResponse[]> {
    return this.http.get<taskResponse[]>(this.url);
  }

}
