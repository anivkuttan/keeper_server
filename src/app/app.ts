import 'express';
import express, { Application } from 'express';
import http from 'http';

export class App {
  private application: Application;


  constructor() {
    this.application = express();
    this.initRouter();
  }
  initRouter() {
    this.application.get("/", (req, res) => {
      res.send("Hello World!");

    });
  }
  public startServer() {
    const server = http.createServer(this.application);
    server.listen(9000, () => {
      console.log('http://localhost:9000'); 
    });
  }
}