import { DirectivesModule } from "./../../../shared/directives/directives.module";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./../../../shared";
import { ActivityComponent } from "./activity.component";
import { ActivityRoutingModule } from "./activity-routing.module";
import {
  ActivityCreateComponent,
  ActivityDeleteComponent,
  ActivityDetailsComponent,
  ActivityListComponent,
  ActivityUpdateComponent,
} from "./components";
import { MaterialModule } from "./../../../../material.module";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    ActivityRoutingModule,
    DirectivesModule,
    AngularEditorModule,
  ],
  declarations: [
    ActivityComponent,
    ActivityCreateComponent,
    ActivityDeleteComponent,
    ActivityDetailsComponent,
    ActivityListComponent,
    ActivityUpdateComponent,
  ],
  exports: [ActivityCreateComponent],
  entryComponents: [ActivityDeleteComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActivityModule {}
