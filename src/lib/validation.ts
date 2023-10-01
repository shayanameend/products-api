import type { Request, Response, NextFunction } from "express";
import type { Result, FieldValidationError } from "express-validator";
import { validationResult } from "express-validator";

export function enforceValidationErrors(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const errors = validationResult(request) as Result<FieldValidationError>;

  if (!errors.isEmpty()) {
    response.status(400).json({
      message: `fields${errors.array().map((error) => {
        return ` ${error.path}`;
      })} are missing`,
    });

    return;
  } else {
    next();
  }
}
