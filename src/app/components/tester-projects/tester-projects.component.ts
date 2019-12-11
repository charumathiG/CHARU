import { Component, OnInit, Input } from '@angular/core';
import { TesterProjectService } from 'src/app/services/tester-project.service';
import { Project } from 'src/app/models/testerProject.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-tester-projects',
  templateUrl: './tester-projects.component.html',
  styleUrls: ['./tester-projects.component.css']
})
export class TesterProjectsComponent implements OnInit {
@Input() project:Project;
projects:any;
  constructor(private testerprojectServices:TesterProjectService,private myRoute:Router,private myActivateRoute:ActivatedRoute,private snack : MatSnackBar) 
  { 
    this.projects=this.testerprojectServices.getAllTestProjects();
    this.testerprojectServices.getUserDataFromAPI().subscribe((data)=>
    {
      this.projects=data;
      // console.log(this.projects);
      // if(this.projects!=null)
      // {
      //   //alert('No Projects');
      
      // }
    })
    
  }
  viewModules(obj)
  {
    console.log(obj);
    this.projects= obj;

   this.myRoute.navigate(['testerViewModules',obj]);
  }


  ngOnInit() {}
  displayedColumns: string[] = ['name', 'description', 'startdate','endDate','viewmodulebutton'];

    // if(!this.projects)
    // {
    //   var rname;
    //   this.myActivateRoute.params.subscribe((p)=>
    //   {
    //     rname=p["rname"];
    //     this.projects=this.testerprojectServices.getProject(rname)
    //   })

    // }    
  }
  

