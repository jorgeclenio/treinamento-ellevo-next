import { Status } from "./../../shared/enums";

export class UpdateTask {
  generatorId: string;
  title: string;
  description: string;
  status: Status;
  responsibleId: string;
}
