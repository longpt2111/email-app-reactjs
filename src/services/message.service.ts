import messagesData from "../data/messages.json";
import { IMessage } from "../interfaces/data.interface";

export default class MessageService {
  private currentEmail: string;
  private messages: IMessage[] = messagesData.sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  constructor(email: string) {
    this.currentEmail = email;
  }

  get getFolders() {
    const folders = this.messages.map(({ folder }) => folder);
    return [...new Set(folders)].sort((a, b) => {
      if (a === "inbox") return -1;
      else if (a === "sent" && b !== "inbox") return -1;
      else if (a === "spam") return 1;
      else return 1;
    });
  }

  get getMessageDetails() {
    return this.messages.filter(
      (message) => message.to.email === this.currentEmail
    );
  }
}
