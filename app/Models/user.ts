export class User {

    Id:number;
    Name:string;
    Status:boolean;

    constructor(id: number, name: string, status: boolean){
        this.Id = id;
        this.Name = name;
        this.Status = status;
    }
}