import { Status } from "./../../shared/enums";
import { User } from "./../../registration/models";

export class Task {
  id: string;
  generator: User;
  title: string;
  description: string;
  status: Status;
  responsible: User;
}
