import { Injectable } from '@angular/core';
import { BugDetail } from '../models/bugDetail.model';

@Injectable({
  providedIn: 'root'
})
export class TesterBugDetailService {
bugDetail:BugDetail[];
constructor() 
{ 
  this.bugDetail=
  [
    new BugDetail("part1","bug1","ready to testing"),
    new BugDetail("part2","bug2"," ready to testing"),
    new BugDetail("part3","bug3","ready to testing"),
   new BugDetail("part4","bug4","ready to testing")
   ]
  }
getBugDetail():BugDetail[]{
return this.bugDetail;
}
}
