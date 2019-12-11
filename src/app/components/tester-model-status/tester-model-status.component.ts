import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TesterModuleStatusService } from 'src/app/services/tester-module-status.service';
import{ HttpClient} from '@angular/common/http';
import { ModuleStatus } from 'src/app/models/testermoduleStatus.model';


@Component({
  selector: 'app-tester-model-status',
  templateUrl: './tester-model-status.component.html',
  styleUrls: ['./tester-model-status.component.css']
})
export class TesterModelStatusComponent implements OnInit {
mod:ModuleStatus;
  constructor(private myRoutes:Router,public testermodulestatusService:TesterModuleStatusService,private http:HttpClient ) { }

  openModal() {
    var data = null;
    this.testermodulestatusService.openModal("successfully submitted!!!" );
    
  }

  
  goBack()
  {
  this.myRoutes.navigateByUrl('/testerViewModules');
  }


ngOnInit() {
}
}
