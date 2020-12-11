import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl ='http://localhost:3000'
  constructor(private httpClient:HttpClient) { }
  getAllTeams(){
    return this.httpClient.get<{message:string,teams:any}>(`${this.teamUrl}/allTeams`);
  }
  getTeamById(id:number){
    return  this.httpClient.get(`${this.teamUrl}/${id}`);
  }
  deleteTeam(id:number){
    return this.httpClient.delete(`${this.teamUrl}/${id}`);
  }
  addTeam(team:any){
    return this.httpClient.post(`${this.teamUrl}/addTeam`,team)
  }
  editTeam(team:any){
    return this.httpClient.put(`${this.teamUrl}/${team.id}`, team);
  }
}
