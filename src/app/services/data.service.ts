import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpErrorResponse  } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { TableData } from '../models/table.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiBase = environment.apiBase;
  constructor(private _http:HttpClient) { }

  getData(data:any){      
    const options = data ? this.buildQuery(data) : {};      
    return this._http.get<TableData>(`${this.apiBase}/subset_overview`,options);
    
  }

  protected buildQuery(data:any){
    let httpParams = new HttpParams();    
    for(let key in data){     
      httpParams = httpParams.set(key, data[key]); 
    }   
    return { params:httpParams };
  }

  protected handleError(error: HttpErrorResponse){
    console.log("Error ",error);
  }
}
