import { Injectable } from "@nestjs/common";
import { User } from "./dto/user.dto";

@Injectable()
export class UsersService {
  private store = new Map<number, User>();

  addUser(user: User) {
    this.store.set(user.id, user);
  }

  getUser(id: number) {
    return this.store.get(id);
  }

  getUsers() {
    return [...this.store.values()];
    // return Array.from(this.store.values()).map((user) => user);
  }

  updateUser(id: number, user: User) {
    this.store.set(id, user);
  }

  deleteUser(id: number) {
    this.store.delete(id);
  }
}
