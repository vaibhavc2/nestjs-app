export class UserDTO {
  id: number;
  name: string;
  age: number;
}

export type User = InstanceType<typeof UserDTO>;
