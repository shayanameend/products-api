import type { Request, Response, NextFunction } from "express";
import type { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

export function getTokenOfUser(user: User) {
  const jwtToken = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET!
  );

  return jwtToken;
}

export function getUserFromToken(token: string) {
  const jwtUser = jwt.verify(token, process.env.JWT_SECRET!);

  return jwtUser;
}

export function hashPassword(password: string) {
  return argon2.hash(password);
}

export function checkHashedPassword(hash: string, password: string) {
  return argon2.verify(hash, password);
}

export function enforceAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const bearer = request.headers.authorization;

  if (!bearer) {
    response.status(401).json({ message: "not authorized" });

    return;
  }

  const token = bearer.split(" ")[1];

  if (!bearer) {
    response.status(401).json({ message: "not authorized" });

    return;
  }

  try {
    const user = getUserFromToken(token);
    request.user = user as { id: string; username: string };

    next();
  } catch (error) {
    response.status(401).json({ message: "not authorized" });

    return;
  }
}
