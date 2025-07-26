import { toNextJsHandler } from "better-auth/next-js";
import { authServer } from "@current/auth/server";

export const { POST, GET } = toNextJsHandler(authServer);
