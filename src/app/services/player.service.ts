import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class PlayerService {
  playerUrl = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  getplayers(){
    return this.httpClient.get<{message : string,players:any}>(`${this.playerUrl}/allPlayers`);
  }
  deletePlayer(id:number){
    return this.httpClient.delete(`${this.playerUrl}/deletePlayer/${id}`);
  }
  getplayerById(id) {
    return this.httpClient.get<{player:any,message:string}>(`${this.playerUrl}/getPlayer/${id}`);
  }
  editPlayer(player:any){
    return this.httpClient.put(`${this.playerUrl}/editPlayer/${player._id}`,player)
  }
  addPlayer(player :any, image:File){
    let formData = new FormData();
    formData.append('name',player.name);
    formData.append('position',player.position);
    formData.append('description',player.description);
    formData.append('birthday',player.birthday);
    formData.append('teamId',player.teamId);
    formData.append('image',image );
    return this.httpClient.post(`${this.playerUrl}/addPlayer`,formData);
  }
} 
