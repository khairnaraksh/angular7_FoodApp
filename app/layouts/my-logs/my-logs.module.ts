import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLogsRoutingModule } from './my-logs-routing.module';
import { MyLogsComponent } from './my-logs.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
    imports: [
        MyLogsRoutingModule,
        CommonModule,
            MaterialModule,
        FormsModule,
    ],
    declarations: [MyLogsComponent],
    exports: []
})
export class MyLogsModule { }