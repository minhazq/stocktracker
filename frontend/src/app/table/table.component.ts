import {Component, OnInit} from "@angular/core";
import {TableModel} from "./table.model";

@Component({
  selector:'app-data-table',
  templateUrl:'./table.component.html'
})
export class TableComponent implements  OnInit{
  tableModel:TableModel[] = [
    new TableModel('APPL','Apple company','02/01/2020','12.50',
      '02/02/2020','23.40','1.50','2200.00'),

    new TableModel('ALL','Apple company','02/01/2020','12.50',
      '02/02/2020','23.40','1.50','12.00'),

  ];
  constructor() {}
  ngOnInit(): void {
  }

}
