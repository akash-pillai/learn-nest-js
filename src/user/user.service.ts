import { Injectable } from '@nestjs/common';



@Injectable()
export class UserService{

    public users : string[]=["Akash"];

    listUsers():string[]{
        return this.users;
    }

    addUsers(userNaame:string):string{
        this.users.push(userNaame);
        return "sucessfully added user";
    }







}