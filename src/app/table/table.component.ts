import { Component, OnInit, Input } from '@angular/core';
import { TableData } from '../models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data:TableData;
  @Input() tableName:String;
  constructor() { }
  ngOnInit() {
  }

}
