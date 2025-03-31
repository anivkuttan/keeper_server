import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import http from 'http';
import { Database } from './configs/db/database';
import container from './configs/di/inversify.config';
import AuthRoute from './features/auth/auth-route';

export class App {
  private readonly application: Application = express();
  private authRoute = container.get(AuthRoute);

  constructor() {
    this.initDefaultSettings()
    this.initRouter();
  }

  private initRouter(): void {
    this.application.get("/", async (req: Request, res: Response) => {
      try {
        res.json('HELLO WORLD');
      } catch (error) {
        res.json('SOMETHING WENT WORNG');
      }
    });
    this.application.use(this.authRoute.path, this.authRoute.router);

  }
  private initDefaultSettings() {

    this.application.use(express.json());
    this.application.use(express.urlencoded({ extended: true }));
    this.application.use(cors());
  }


  public async startServer(port: number, databaseUrl: string): Promise<void> {
    try {
      if (await Database.connectToDatabase(databaseUrl)) {
        http.createServer(this.application).listen(port, () => {
          console.log(`Server running at http://localhost:${port}`);
        });
      } else {
        console.error("Unable to connect to database");
      }
    } catch (error) {
      console.error("Error starting the server:", error);
    }
  }
}
