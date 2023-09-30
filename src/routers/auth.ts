import { Router } from "express";
import { body } from "express-validator";
import { signUp, signIn } from "../handlers/user";

const authRouter = Router();

authRouter.post("signup", body("username", "password").isString(), signUp);
authRouter.post("signin", body("username", "password").isString(), signIn);

export default authRouter;
