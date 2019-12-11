import { Component, OnInit } from '@angular/core';
import { CreateBug } from 'src/app/models/createBug.model';
import { TesterCreateBugService } from 'src/app/services/tester-create-bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tester-create-bug',
  templateUrl: './tester-create-bug.component.html',
  styleUrls: ['./tester-create-bug.component.css']
})
export class TesterCreateBugComponent implements OnInit {
createBug:CreateBug;
constructor(private createBugService:TesterCreateBugService,private myRoute:Router) { 
  this.createBug= new CreateBug;
}

ngOnInit() {
}
createBugs(){
  console.log(this.createBug);
  this.createBugService.addBugs(this.createBug);
}
viewModule(){
  this.myRoute.navigateByUrl("/testerViewModules")
}
 
}
