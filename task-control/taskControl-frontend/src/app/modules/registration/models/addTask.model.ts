import { Status } from "./../../shared/enums";

export class AddTask {
  generatorId: string;
  title: string;
  description: string;
  status: Status;
  responsibleId: string;
}
