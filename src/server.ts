import express from "express";
import cors from "cors";
import morgan from "morgan";
import { authRouter, apiRouter } from "./routers";
import { enforceAuth } from "./lib/auth";
import { enforceValidationErrors } from "./lib/validation";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/api", enforceAuth, enforceValidationErrors, apiRouter);

export default app;
