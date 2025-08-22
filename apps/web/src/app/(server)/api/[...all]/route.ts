import { authServer } from "@current/auth/auth-server";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(authServer);
