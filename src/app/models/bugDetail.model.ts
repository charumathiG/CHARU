export class BugDetail{
    moduleName:string;
    bugName:string;
    bugStatus:string;
    constructor (mmoduleName?,mbugName?,mbugStatus?){
        this.bugName=mbugName;
        this.moduleName=mmoduleName;
        this.bugStatus=mbugStatus;
    }
}