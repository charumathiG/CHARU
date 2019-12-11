import { Component, OnInit, Input } from '@angular/core';
import { TesterViewModuleService } from 'src/app/services/tester-view-module.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewModule } from 'src/app/models/testerViewModule.model';
import { HttpClient } from '@angular/common/http';
import { ModuleStatus } from 'src/app/models/testermoduleStatus.model';
import { CompileTemplateMetadata } from '@angular/compiler';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tester-view-modules',
  templateUrl: './tester-view-modules.component.html',
  styleUrls: ['./tester-view-modules.component.css']
})
export class TesterViewModulesComponent implements OnInit {
 viewModules:ViewModule[];
//viewModules:any;
mod:any;
P_name:string;

@Input() viewmodulebutton:any;
bugbutton:any;
  constructor(private testerViewModuleService:TesterViewModuleService,
    private myRoute:Router,private myActivateRoute:ActivatedRoute,private http:HttpClient) 
  {
    this.testerViewModuleService.getAllTestModules().subscribe((data)=>
    {
      this.viewModules=data;
      console.log(this.viewModules);
    })
  }
    
   displayedColumns: string[] = ['name', 'description', 'status','fromDate','toDate','modulecompletedbutton','bugbutton'];
  

   moduleStatus(module_name){
     
    this.http.put("http://localhost:60974/api/Module?value="+module_name,this.mod).subscribe((res)=>
    console.log(res))
   this.myRoute.navigateByUrl("/testerModuleStatus")
  }
  
   ngOnInit() {
      var mname;
      this.myActivateRoute.params.subscribe((p)=>
      {
        mname=p["mname"];
        console.log(mname);
        
      })
  }
  
  bugsfound()
  {
    this.myRoute.navigateByUrl("/testerCreateBug")
  }

  viewProject()
  {
   this.myRoute.navigateByUrl("/testerProjects")
  }

}
