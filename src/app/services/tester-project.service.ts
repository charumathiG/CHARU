import { Injectable } from '@angular/core';
import { Project } from '../models/testerProject.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable()
  
export class TesterProjectService {
  projects:any;
  constructor(private myHttp:HttpClient){
    this.projects=[];
}
getUserDataFromAPI(){
    return this.myHttp.get("http://localhost:60974/api/Tester?employee_name=Tamizhni");
}

getAllTestProjects():Observable<any>
{
    return this.getUserDataFromAPI();
}
//    getAllProjects():Project[]{
//     return this.projects;
//    }
//   getProject(pname:string):Project{
//       var project:Project=null;
//       for(var i=0; i<this.projects.length; i++){
//           if(this.projects[i].P_Name==pname)
//           {
//               project = this.projects[i];
//               break;
//           }
//       }
//       return project;
//   }
}
