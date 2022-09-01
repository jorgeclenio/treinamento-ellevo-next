import { Status } from "src/app/modules/shared/enums/status.enum";

export class AddTask {
  generatorId: string;
  title: string;
  description: string;
  status: Status;
  responsibleId: string;
  activityId: string;
}
