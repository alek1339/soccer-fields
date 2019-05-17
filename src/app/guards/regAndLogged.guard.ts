import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";

import { Auth } from "../core/auth";

@Injectable({
  providedIn: "root" // <- ADD THIS
})
export class RegAndLoggedGuard implements CanActivate {
  constructor(public auth: Auth) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return !this.auth.isLogged();
  }
}
