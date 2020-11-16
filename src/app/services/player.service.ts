import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class PlayerService {
  playerUrl = 'api/players';
  constructor(private httpClient:HttpClient) { }

  getplayers(){
    return this.httpClient.get(this.playerUrl);
  }
  deletePlayer(id:number){
    return  this.httpClient.delete(`${this.playerUrl}/${id}`);
  }
  getplayerById(id) {
    return this.httpClient.get(`${this.playerUrl}/${id}`);
  }
  editPlayer(player:any){
    return this.httpClient.put(`${this.playerUrl}/${player.id}`,player)
  }
  addPlayer(player :any){
    return this.httpClient.post(this.playerUrl,player);
  }
}
