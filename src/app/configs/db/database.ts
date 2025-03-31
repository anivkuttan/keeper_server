import mongoose from "mongoose";

export class Database {
  public static async connectToDatabase(url: string): Promise<boolean> {
    
    return await mongoose.connect(url).then((value) => {
      console.log(`Database connected to ${url}`);
      return true;
    }).catch((error) => {
      console.log(`Database connected to ${error}`);
      return false;
    });
  }
}