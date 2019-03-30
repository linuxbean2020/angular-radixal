import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {sortBy} from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableData:any=[]
  private parameters=[
    {	
      DateFrom:'01/01/2018',
      DateTo:'31/12/2019',
      RiskCategory:'A',
      LoanPurpose:0
    },
    {	
      DateFrom:'01/01/2018',
      DateTo:'31/12/2019',
      RiskCategory:'B',
      LoanPurpose:0
    },
    {	
      DateFrom:'01/01/2018',
      DateTo:'31/12/2019',
      RiskCategory:'C',
      LoanPurpose:0
    },
    {	
      DateFrom:'01/01/2018',
      DateTo:'31/12/2019',
      RiskCategory:'D',
      LoanPurpose:0
    },
    {	
      DateFrom:'01/01/2018',
      DateTo:'31/12/2019',
      RiskCategory:'E',
      LoanPurpose:0
    },
  ]
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    for(let p of this.parameters){   
        this._dataService.getData(p)
        .subscribe(
          (res:any)=>{
            res.tableName = p.RiskCategory;
            this.tableData.push(res);
            this.tableData = sortBy(this.tableData, ['tableName']);
          },
          err=> console.log("Error ",err)
        )
    }  
    
  }

}
