import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";

const USERS = [] as UserDTO[];

@Controller("/users")
export class UsersController {
  constructor() {}

  @Get()
  getUsers() {
    return USERS;
  }

  @Post()
  addUser(@Body() user: UserDTO) {
    USERS.push(user);
    return "User registered successfully!";
  }

  @Get("/:id")
  getUser(@Param("id") id: string) {
    return USERS.find((user) => user.id === id);
  }
}
