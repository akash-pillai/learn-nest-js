import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import {isEqual}  from "lodash";



@Injectable()
export class UserService{

    public users : UserDto[]=[{
        "name":"Akash",
        "age":26
    }];

    listUsers():UserDto[]{
        return this.users;
    }

    addUsers(user:UserDto):string{
        this.users.push(user);
        return "sucessfully added user";
    }

    updateUser(user:UserDto,name:string){
       try{
        for(let obj of this.users){
            if(obj.name===name){
                obj.name=user.name;
                obj.age=user.age;
            }
        }
      return "user updated sucessfully";
      }catch(ex:any){
        return "something went wrong"
      }
    }

    deleteUser(user:UserDto):UserDto[]{
       try{
        for(let obj of this.users){
            if(isEqual(obj,user)){
                let index=this.users.indexOf(obj);
                this.users.splice(index, 1);
            }
        }
        return this.users;
      }catch(ex:any){
        console.log(ex);
      }
    }







}