export interface IUser {
  email: string;
  password: string;
  name: string;
  avatarUrl: string;
}

export interface IMessage {
  id: string;
  folder: string;
  from: {
    email: string;
    name: string;
    avatarUrl: string;
  };
  to: {
    email: string;
    name: string;
    avatarUrl: string;
  };
  timestamp: string;
  main: {
    title: string;
    content: string;
  };
  unread: boolean;
}
