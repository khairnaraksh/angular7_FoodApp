import { Routes, RouterModule } from '@angular/router';
import { MyLogsComponent } from './my-logs.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: '',
    component: MyLogsComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyLogsRoutingModule { }