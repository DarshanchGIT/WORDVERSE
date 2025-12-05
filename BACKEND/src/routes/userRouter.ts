import { signinInput, signupInput } from "@darshanpm/wordverse";
import { PrismaClient } from "@prisma/client/edge";
// edge: since its made for serverless fns
signinInput;
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { userMiddleware } from "../middleware/userMiddleware";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    // if {success} => returns direct result of safeparse else success object in total
    const { success } = signupInput.safeParse(body);
    if (!success) {
      return c.json(
        {
          message: "Inavlid credentials !!",
        },
        401
      );
    }
    const user = await prisma.user.create({
      data: body,
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    console.log("Token: ", token);
    return c.json(
      {
        message: "User signed up successfully",
        token,
      },
      200
    );
  } catch (err) {
    return c.json(
      {
        message: "Error signing you up!!",
        err,
      },
      401
    );
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
      return c.json(
        {
          message: "Inavlid credentials !!",
        },
        401
      );
    }
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user)
      return c.json(
        {
          message: "User doesn't exist, Please signup first",
        },
        404
      );
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    console.log("Token: ", token);
    return c.json(
      {
        message: "User signed in successfully",
        token,
      },
      200
    );
  } catch (err) {
    return c.json(
      {
        message: "Error signing you in!!",
        err,
      },
      401
    );
  }
});

userRouter.get("/me", userMiddleware, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.user.findUnique({
      where: { id: c.get("userId") },
      select: {
        id: true,
        name: true,
        email: true,
        posts: true,
      },
    });
    const user = {
      id: response?.id,
      email: response?.email,
      name: response?.name,
    };
    return c.json({
      message: "User details and blogs as follows:",
      user: user,
      post: response?.posts,
    });
  } catch (err) {
    return c.json(
      {
        message: "Error while fetching user's details!!",
        err,
      },
      404
    );
  }
});
