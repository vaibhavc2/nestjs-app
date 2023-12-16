import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
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

  @Put("/:id")
  updateUser(@Param("id") id: string, @Body() user: UserDTO) {
    const userIndex = USERS.findIndex((user) => user.id === id);
    if (!userIndex) return "User not found!";
    else USERS[userIndex] = user;
    return "User updated successfully!";
  }

  @Delete("/:id")
  deleteUser(@Param("id") id: string) {
    const userIndex = USERS.findIndex((user) => user.id === id);
    if (!userIndex) return "User not found!";
    else USERS.splice(userIndex, 1);
    return "User deleted successfully!";
  }
}
