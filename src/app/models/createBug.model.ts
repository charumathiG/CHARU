export class CreateBug{
    bugName:string;
    bugStatus:string

    constructor(cbugName?,cbugStatus?){
        this.bugName=cbugName;
        this.bugStatus=cbugStatus;
    }
}