import type { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";
import { checkHashedPassword, getTokenOfUser, hashPassword } from "../lib/auth";

export async function signUp(request: Request, response: Response, next: NextFunction) {
  try {
    const user = await prisma.user.create({
      data: {
        username: request.body.username,
        password: await hashPassword(request.body.password),
      },
    });

    const token = getTokenOfUser(user);
    response.status(200).json({ token });
  } catch (error) {
    next(error)
  }
}

export async function signIn(request: Request, response: Response, next: NextFunction) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: request.body.username,
      },
    });

    if (!user) {
      response.status(401).json({ message: "username or password not valid" });

      return;
    }

    const isValid = checkHashedPassword(user?.password!, request.body.password);

    if (!isValid) {
      response.status(401).json({ message: "username or password not valid" });

      return;
    }

    const token = getTokenOfUser(user);
    response.status(200).json({ token });
  } catch (error) {
    next(error)
  }
}
