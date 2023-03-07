import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("/admin")
export class UserController{

    constructor(private userService : UserService){

    }

    @Get("/list")
    listUsers():UserDto[]{
        return this.userService.listUsers();
    }

    @Post("/add/")
    addUser(@Body() user: UserDto):string{
        return this.userService.addUsers(user);
    }

    @Put("/add/:name")
    updateUser(@Body() user: UserDto,@Param("name") name:string):string{
        return this.userService.updateUser(user,name);
    }
    

    

    

}