import { Status } from "src/app/modules/shared/enums/status.enum";

export class UpdateTask {
  GeneratorId: string;
  Title: string;
  Description: string;
  Status: Status;
  ResponsibleId: string;
  ActivityId: string;
}
