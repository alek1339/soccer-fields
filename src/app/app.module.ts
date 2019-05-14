import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/layout/navigation/navigation.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { RegistrationComponent } from "./components/user/registration/registration.component";
import { LoginComponent } from "./components/user/login/login.component";
import { CreateComponent } from "./components/football-fields/create/create.component";
import { EditComponent } from "./components/football-fields/edit/edit.component";
import { ReservationsComponent } from "./components/admin/reservations/reservations.component";
import { AllComponent } from "./components/football-fields/all/all.component";
import { WellcomeComponent } from "./components/wellcome/wellcome.component";
import { AdminPanelComponent } from "./components/admin/admin-panel/admin-panel.component";
import { AllPlayersComponent } from "./components/players/all-players/all-players.component";
import { CreatePlayerComponent } from "./components/players/create-player/create-player.component";
import { PlayersService } from "./services/players.service";
// import { EditPlayerComponent } from "./components/players/edit-player/edit-player.component";
import { BookComponent } from "./components/football-fields/book/book.component";
import { ReservationService } from "./services/reservations.service";
import { BookCalendarComponent } from './components/football-fields/book-calendar/book-calendar.component';
import {FullCalendarModule} from 'primeng/fullcalendar';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    CreateComponent,
    EditComponent,
    ReservationsComponent,
    AllComponent,
    WellcomeComponent,
    AdminPanelComponent,
    AllPlayersComponent,
    CreatePlayerComponent,
    // EditPlayerComponent,
    BookComponent,
    BookCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  providers: [PlayersService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
