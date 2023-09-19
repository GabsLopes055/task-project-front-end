import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { login } from 'src/interfaces/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url = environment.baseURL;

  constructor(
    private http: HttpClient,
    private message: MatSnackBar
  ) { }

  showMessage(msg: string, error: boolean) {
    this.message.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: error ? "error" : "success"
    })
  }

  errorHandler(e: any): Observable<any> {
    if(e.status == 401) {
      this.showMessage("Usuário ou Senha Inválidos !", true)
    }
    return EMPTY;
  }

  public login(login: login): Observable<boolean> {
    return this.http.post<login>(this.url + "login", login).pipe(
      map((response) => response),
      catchError(e => this.errorHandler(e))
    )
  }

}
