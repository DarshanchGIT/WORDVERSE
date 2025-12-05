import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";

export const userMiddleware = createMiddleware<{
  Bindings: {
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>(async (c, next) => {
  try {
    let token = c.req.header("Authorization");
    if (!token) {
      return c.json(
        {
          message: "Token is required !!",
        },
        403
      );
    }
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }
    const result = await verify(token, c.env.JWT_SECRET);
    if (!result) {
      return c.json(
        {
          message: "token is expired or invalid",
        },
        403
      );
    }
    c.set("userId", `${result.id}`);
    await next();
  } catch (e) {
    return c.json(
      {
        message: "Error in authenticating user",
      },
      500
    );
  }
});
