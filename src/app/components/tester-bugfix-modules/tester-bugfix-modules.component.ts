import { Component, OnInit } from '@angular/core';
import { TesterBugDetailService } from 'src/app/services/tester-bug-detail.service';
import { Router } from '@angular/router';
import { BugDetail } from 'src/app/models/bugDetail.model';

@Component({
  selector: 'app-tester-bugfix-modules',
  templateUrl: './tester-bugfix-modules.component.html',
  styleUrls: ['./tester-bugfix-modules.component.css']
})
export class TesterBugfixModulesComponent implements OnInit {
bugDetail:BugDetail;
bugDetails:BugDetail[];
  constructor(private testerbugdetailService:TesterBugDetailService,private myRoute:Router)
   {
     this.bugDetails=this.testerbugdetailService.getBugDetail();
    }
    displayedColumns: string[] = ['1', '2', '3'];

  ngOnInit() {
  }

}
