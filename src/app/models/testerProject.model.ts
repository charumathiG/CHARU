export class Project{

    SNO:number;
    P_Name:string;
    P_Description:any;
    P_Startdate:number;
    P_EndDate:number;
    
    constructor(SNO?,pName?,pdes?,sdate?,edate?){
        
        this.SNO=SNO;
        this.P_Name=pName;
        this.P_Description=pdes;
        this.P_Startdate=sdate;
        this.P_EndDate=edate;
    
    }
}