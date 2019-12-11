export class ViewModule{

    SNO:number;
    Module_name:string;
    Module_Description:any;
    From_date:number;
    To_date:number;
    
    constructor(SNO?,mName?,mdes?,msdate?,medate?){
        
        this.SNO=SNO;
        this.Module_name=mName;
        this.Module_Description=mdes;
        this.From_date=msdate;
        this.To_date=medate;
    
    }
}
