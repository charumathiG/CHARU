import { Injectable } from '@angular/core';
import { CreateBug } from '../models/createBug.model';

@Injectable({
  providedIn: 'root'
})
export class TesterCreateBugService {
bugs:CreateBug[];
constructor()
{ 
  this.bugs=
  [
    new CreateBug("bug1","eat"),
    new CreateBug("bug2","eate"),
    new CreateBug("bug3","eatee"),
  ]
}
addBugs(createBug:CreateBug){
 console.log(createBug);
  
  this.bugs=[new CreateBug]
}
}
