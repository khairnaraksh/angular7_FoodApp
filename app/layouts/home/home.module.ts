import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
    imports: [
        HomeRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [HomeComponent],
    exports: []
})
export class HomeModule { }