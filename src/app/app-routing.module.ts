import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/page/layout.component';
import { UserAutenticateGuard } from './login/user-autenticate.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksInProgressComponent } from './tasks-in-progress/tasks-in-progress.component';
import { TasksFinishComponent } from './tasks-finish/tasks-finish.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '', component: LayoutComponent, canActivate: [UserAutenticateGuard],
    children: [
      {path: 'dashboard', component: HomeComponent},
      {path: 'createTask', component: CreateTaskComponent},
      {path: 'tasksInProgress', component: TasksInProgressComponent},
      {path: 'tasksFinish', component: TasksFinishComponent}
    ]
  },
  { path: '**', redirectTo: '', canActivate: [UserAutenticateGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 