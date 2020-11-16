import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let matches = [{ idR: 1, id: 1, scoreOne: 3, scoreTwo: 2, equipeOne: "Juv", equipeTwo: "FCB" },
    { idR: 2, id: 2, scoreOne: 4, scoreTwo: 5, equipeOne: "ca", equipeTwo: "EST" },
    { idR: 3, id: 3, scoreOne: 8, scoreTwo: 2, equipeOne: "bay", equipeTwo: "FCB" },
    { idR: 4, id: 4, scoreOne: 1, scoreTwo: 2, equipeOne: "RMD", equipeTwo: "FCB" },
    { idR: 5, id: 5, scoreOne: 4, scoreTwo: 2, equipeOne: "FBM", equipeTwo: "FCB" },
    { idR: 6, id: 6, scoreOne: 0, scoreTwo: 5, equipeOne: "FBM", equipeTwo: "FCB" }
    ];
    let players = [{ id: 1,idT:1, name: 'Messi', position: 'ATQ', description: 'the goat', birthday: '13-12-1989', image: 'assets/images/img_3.jpg',goals:19 },
    { id: 2,idT:2, name: 'Ronaldo', position: 'ATQ', description: 'CR7', birthday: '13-02-1988', image: 'assets/images/img_1.jpg',goals:15 },
    { id: 3,idT:1, name: 'Fetni', position: 'ATQ', description: 'the Boss', birthday: '16-07-1994', image: 'assets/images/img_2.jpg',goals:17 },
    { id: 4,idT:4, name: 'KDB', position: 'ATQ', description: 'kevin debruyn', birthday: '13-12-1989', image: 'assets/images/img_1.jpg',goals:18 },
    { id: 5,idT:2, name: 'Karim Benzima', position: 'ATQ', description: 'the mozhar', birthday: '13-12-1989', image: 'assets/images/img_3.jpg',goals: 18}];

    let users = [{ id: 1, firstName: 'fetni', lastName: 'med', email: 'email@email.com', pwd: '12345678', tel: '54793134' },
    { id: 2, firstName: 'mohamed', lastName: 'makhlouf', email: 'mo5@email.com', pwd: '88552233', tel: '55789321' },
    { id: 3, firstName: 'ala', lastName: 'gharssallah', email: 'ala@email.com', pwd: '44556644', tel: '54823159' },
    { id: 4, firstName: 'mahdi', lastName: 'ennabli', email: 'nabli@email.com', pwd: '789654123', tel: '98785623' },
    { id: 5, firstName: 'xxxxx', lastName: 'xxxxx', email: 'xxx@email.com', pwd: '789654123', tel: '98785623' },
    ];
    let details = [
      { idMatch: 1, id: 1, playersOne: ["Ronaldo(p)", "morata"], timeOne: ["15", "50"], playersTwo: ["Messi", "fati", "griezman"], timeTwo: ["20", "55", "70"] },
    { idMatch: 2, id: 2, playersOne: ["Ronaldo(p)", "morata"], timeOne: ["27", "50"], playersTwo: ["Messi", "fati", "pedri"], timeTwo: ["20", "55", "70"] }
    ]
    let teams = [
      {id: 1, name:"Barcelona ",abriviation:"FCB",Yfondtaion:"1899",arena:"Camp Nou"},
    {id: 2, name:"Real Madrid",abriviation:"RMD",Yfondtaion:"1902",arena:"Santiago Bernabio"},
    {id: 3, name:"Bayern Munich",abriviation:"BMFC",Yfondtaion:"1900",arena:"Allianz Arena"}  ,
    {id: 4, name:"Man City",abriviation:"MC",Yfondtaion:"1900",arena:"Etihad Stadium"}  ,
    {id: 5, name:"Juventus",abriviation:"JUV",Yfondtaion:"1901",arena:"Torino"}  ]
   


    return { matches, players, users, details,teams };
  }
}
