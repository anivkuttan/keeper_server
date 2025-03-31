import { Router } from "express";

export interface AppRoute {
  router: Router;
  path: string;
}


