import type {Request, Response, NextFunction} from "express";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { authRouter, apiRouter } from "./routers";
import { enforceAuth } from "./lib/auth";

const app = express();

app.get("/", (request: Request, response: Response, next: NextFunction)=> {
  setTimeout(()=>{
    next(new Error("Hello!"));
  },1)
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/api", enforceAuth, apiRouter);
app.use((error: Error, request: Request, response: Response, next: NextFunction)=> {
  response.json({message: error.message})
});

export default app;
