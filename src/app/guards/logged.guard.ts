import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";
import { Router } from "@angular/router";

import { Auth } from "../core/auth";

@Injectable({
  providedIn: "root" // <- ADD THIS
})
export class LoggedGuard implements CanActivate {
  constructor(public auth: Auth, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (!this.auth.isLogged()) {
      this.router.parseUrl("/users/login");
    } else {
      return true;
    }
  }
}
