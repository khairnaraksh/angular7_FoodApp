import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';
import {MyLogsService} from './../../../services/my-logs.service';
@Component({
  selector: 'app-my-logs',
  templateUrl: './my-logs.component.html',
  styleUrls: ['./my-logs.component.scss']
})
export class MyLogsComponent implements OnInit {
  ELEMENT_DATA:any={};

  // public ELEMENT_DATA: savesFood[] = [
  //   { foodcategory: 'Hydrogen', calories: 1.0079, food: 'H' },
  //   { foodcategory: 'Helium', calories: 4.0026, food: 'He' },
  //   { foodcategory: 'Lithium', calories: 6.941, food: 'Li' },
  //   { foodcategory: 'Beryllium', calories: 9.0122, food: 'Be' },
  //   { foodcategory: 'Boron', calories: 10.811, food: 'B' },
  //   { foodcategory: 'Carbon', calories: 12.0107, food: 'C' }];

  constructor(public router: Router, private myLogsService:MyLogsService) { }
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['foodcategory', 'food', 'calories'];
  public dataSource: MatTableDataSource<savesFood>;

  ngOnInit() {
    this.myLogsService.FinalFood().subscribe((response)=>{
      if(response){
        this.ELEMENT_DATA=response;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;

      }
    })
  }

  backtoHome = () => {
    this.router.navigate(["/Home"]);
  }

}
export interface savesFood {
  foodcategory: string;
  calories: number;
  food: string;
}
