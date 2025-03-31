declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;  // Always a string in process.env 
    DATABASE_URL: string;
  }
}