import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./components/header/header.component";
import { TitleComponent } from "./components/title/title.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { ProfileComponent } from "./views/profile/profile.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TitleComponent,
    NotFoundComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TitleComponent,
    NotFoundComponent,
    ProfileComponent,
  ],
})
export class SharedModule {}
