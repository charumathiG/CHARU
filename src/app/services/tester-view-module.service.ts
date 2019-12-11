import { Injectable } from '@angular/core';
import { ViewModule } from '../models/testerViewModule.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesterViewModuleService {
  viewmodules:any;
  P_Name="Release Management System";

  constructor(private myHttp:HttpClient){
      this.viewmodules=[];
  }
  getUserDataFromAPI(){
    return this.myHttp.get("http://localhost:60974/api/Module?P_Name="+this.P_Name);
}
getAllTestModules():Observable<any>{
          return this.getUserDataFromAPI();
 }

 getAllviewmodules():ViewModule[]{
       //console.log("all"+this.viewmodules)
 return this.viewmodules;
        }
//   getviewmodule(mName:string):ViewModule{
//       var viewmodule:ViewModule=null;
//       for(var i=0; i<this.viewmodules.length; i++){
//           if(this.viewmodules[i].Modulename==mName)
//           {
//               viewmodule = this.viewmodules[i];
//               break;
//           }
//       }
//       return viewmodule;
//   }
}
