import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
//!definir l'adresse
matchUrl='api/matches'
  constructor(private httpClient:HttpClient) { }
  getAllMatches(){
    return this.httpClient.get(this.matchUrl);
  }
  addMatch(match:any){
    return this.httpClient.post(this.matchUrl,match);
  }
  deleteMatch(id:number){
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
  getMatchById(id:number){
    return this.httpClient.get(`${this.matchUrl}/${id}`);

  }
  getMatchByIdM(detail: any) {
    return this.httpClient.get(`${this.matchUrl}/${detail.idM}`);

  }
  editMatch(match:any){
    return this.httpClient.put(`${this.matchUrl}/${match.id}`,match);
  }
}
