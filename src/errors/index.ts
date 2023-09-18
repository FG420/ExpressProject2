import { genericErrorHandler } from "./generic";
import { notFoundHandler } from "./not-found";
import { validationErrorHandeler } from "./validation-error";

export const errorHandlers = [notFoundHandler, validationErrorHandeler,genericErrorHandler];
