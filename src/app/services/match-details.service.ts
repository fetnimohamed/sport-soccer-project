import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchDetailsService {
  detailsUrl ='api/details'
  constructor(private httpClient:HttpClient) { }
  getDetailsById(id:number){
    return  this.httpClient.get(`${this.detailsUrl}/${id}`);
  }
}
