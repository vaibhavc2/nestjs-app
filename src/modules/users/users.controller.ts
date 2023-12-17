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
import { UsersService } from "./users.service";

@Controller("/users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers() || [];
  }

  @Post()
  addUser(@Body() user: UserDTO) {
    this.usersService.addUser(user);
    return { message: "User registered successfully!" };
  }

  @Get("/:id")
  getUser(@Param("id") id: string): UserDTO | { message: string } {
    return this.usersService.getUser(+id) || { message: "User not found!" };
  }

  @Put("/:id")
  updateUser(@Param("id") id: string, @Body() user: UserDTO) {
    this.usersService.updateUser(+id, user);
    return { message: "User updated successfully!" };
  }

  @Delete("/:id")
  deleteUser(@Param("id") id: string) {
    this.usersService.deleteUser(+id);
    return { message: "User deleted successfully!" };
  }
}
