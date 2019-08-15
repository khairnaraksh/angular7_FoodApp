import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: "./layouts/home/home.module#HomeModule" },
  {
    path: "Home",
    loadChildren: "./layouts/home/home.module#HomeModule"
  },
  {
    path: "MyLogs",
    loadChildren: "./layouts/my-logs/my-logs.module#MyLogsModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
