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

  isValidLogin(email: IUser["email"], password: IUser["password"]): boolean {
    return this.users.some(
      (user) => user.email === email && user.password === password
    );
  }

  getUserData(inputEmail: string): IUser | null {
    const user = this.users.find(({ email }) => inputEmail === email);
    if (!user) return null;
    return user;
  }

  // getUserInfo(inputEmail: string): Omit<IUser, "password"> | null {
  //   const foundUser = this.users.find(({ email }) => inputEmail === email);
  //   if (!foundUser) return null;
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const { password, ...rest } = foundUser;
  //   return rest;
  // }
}

export const userService = new UserService(users);
