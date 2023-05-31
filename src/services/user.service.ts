import { IUser } from "../interfaces/data.interface";
import users from "../data/users.json";
class UserService {
  private users: IUser[];

  constructor(users: IUser[]) {
    this.users = users;
  }

  get getAllUsersEmail() {
    return this.users.map(({ email }) => email);
  }

  isLoginValid({
    email,
    password,
  }: {
    email: IUser["email"];
    password: IUser["password"];
  }): boolean {
    return !!this.users.find(
      (user) => user.email === email && user.password === password
    );
  }

  // getUserInfo(inputEmail: string): Omit<IUser, "password"> | null {
  //   const foundUser = this.users.find(({ email }) => inputEmail === email);
  //   if (!foundUser) return null;
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const { password, ...rest } = foundUser;
  //   return rest;
  // }
}

export const userService: UserService = new UserService(users);
