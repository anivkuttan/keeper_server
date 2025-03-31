import { Router } from "express";
import { inject } from "inversify";
import TYPES from "../../../config/di/types";
import AuthController from "../controllers/auth-controller";

export interface AppRoute {
  router: Router;
  path: string;
}

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