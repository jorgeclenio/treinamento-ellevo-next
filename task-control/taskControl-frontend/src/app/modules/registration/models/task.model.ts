import { User } from "src/app/modules/registration/models/user.model";
import { Status } from "./../../shared/enums/status.enum";

export class Task {
  id: string;
  generator: User;
  title: string;
  description: string;
  status: Status;
  responsible: User;
}
