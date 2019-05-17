import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegistrationComponent } from "./components/user/registration/registration.component";
import { LoginComponent } from "./components/user/login/login.component";

import { CreateComponent } from "./components/football-fields/create/create.component";
import { EditComponent } from "./components/football-fields/edit/edit.component";
import { AllComponent } from "./components/football-fields/all/all.component";

import { AllPlayersComponent } from "./components/players/all-players/all-players.component";
import { CreatePlayerComponent } from "./components/players/create-player/create-player.component";

import { ReservationsComponent } from "./components/admin/reservations/reservations.component";
import { WellcomeComponent } from "./components/wellcome/wellcome.component";
import { AdminPanelComponent } from "./components/admin/admin-panel/admin-panel.component";
import { BookComponent } from "./components/football-fields/book/book.component";

import { AdminGuard } from "./guards/admin.guard";
import { RegAndLoggedGuard } from "./guards/regAndLogged.guard";
import { EditPlayersComponent } from "./components/players/edit-players/edit-players.component";
import { LoggedGuard } from "./guards/logged.guard";
const routes: Routes = [
  { path: "", component: WellcomeComponent },
  {
    path: "players/all",
    component: AllPlayersComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: "players/new",
    component: CreatePlayerComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "players/edit/:id",
    component: EditPlayersComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "admin/admin-panel",
    component: AdminPanelComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "user/register",
    component: RegistrationComponent,
    canActivate: [RegAndLoggedGuard]
  },
  {
    path: "user/login",
    component: LoginComponent,
    canActivate: [RegAndLoggedGuard]
  },
  {
    path: "football-fields/new",
    component: EditComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "football-fields/new/:id",
    component: EditComponent,
    canActivate: [AdminGuard]
  },
  // { path: "football-fields/edit", component: EditComponent },
  {
    path: "football-fields/all",
    component: AllComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: "football-fields/book/:id",
    component: BookComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: "admin/reservations",
    component: ReservationsComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
