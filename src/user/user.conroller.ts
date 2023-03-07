import { Body, Controller, Get, Param, Post } from "@nestjs/common/decorators";
import { UserService } from "./user.service";

@Controller("/admin")
export class UserController{

    constructor(private userService : UserService){

    }

    @Get("/list")
    listUsers():string[]{
        return this.userService.listUsers();
    }

    @Post("/add/:name")
    addUser(@Param('name') name: string):string{
        return this.userService.addUsers(name);
    }

    

    

}