import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogTemplateComponent } from '../dialog-template/dialog-template.component';


@Injectable({
  providedIn: 'root'
})
export class TesterModuleStatusService {

  constructor(public dialog: MatDialog ){
  }
 
  openModal(message:string)
  {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      
      message:message
  
  };
  dialogConfig.minWidth = 400;
  dialogConfig.minHeight =100;

    this.dialog.open(DialogTemplateComponent, dialogConfig);
   

  }
  
}
