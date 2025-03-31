import { Router } from "express";
import { inject } from "inversify";
import TYPES from "../../configs/di/types";
import { AppRoute } from "../../configs/global/router-interface";
import AuthController from "./auth-controller";

export default class AuthRoute implements AppRoute {
  router: Router = Router();
  path: string = '/auth';

  constructor(@inject(TYPES.AuthController) private readonly controller: AuthController) {
    this.initRoutes();
  }
  private initRoutes(): void {
    this.router.get('/name', this.controller.callDisplayName);
  }
}