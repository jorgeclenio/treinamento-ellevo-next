import { Status } from "src/app/modules/shared/enums/status.enum";

export class UpdateTask {
  public GeneratorId: string;
  public Title: string;
  public Description: string;
  public Status: Status;
  public ResponsibleId: string;
  public ActivityId: string;
}
