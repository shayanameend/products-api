import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export function enforceValidationErrors(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    response.status(400).json({ message: errors.array() });

    return;
  } else {
    next();
  }
}
