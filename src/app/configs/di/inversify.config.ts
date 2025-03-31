import { Container } from "inversify";
import "reflect-metadata";
import AuthController from "../../features/auth/auth-controller";
import AuthRoute from "../../features/auth/auth-route";
import TYPES from "./types";



const container = new Container({ defaultScope: "Singleton" });

// Register controllers
container.bind<AuthController>(TYPES.AuthController).to(AuthController);

// Register routes
container.bind<AuthRoute>(AuthRoute).toSelf();

export default container; 