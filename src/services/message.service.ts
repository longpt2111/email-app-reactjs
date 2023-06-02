import messagesData from "../data/messages.json";
import { IMessage } from "../interfaces/data.interface";

export default class MessageService {
  private messages: IMessage[] = messagesData.sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  private currentEmail: string;

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
}
