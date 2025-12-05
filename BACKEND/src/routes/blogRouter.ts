import { Hono } from "hono";
import { userMiddleware } from "../middleware/userMiddleware";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { blogCreationInput, blogUpdateInput } from "@darshanpm/wordverse";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use(userMiddleware);

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            upvotes: true,
          },
        },
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return c.json(
      {
        message: " All Blog fetched successfully",
        blogs,
      },
      201
    );
  } catch (err) {
    return c.json(
      {
        message: "Error occurred while fetching blogs",
        err,
      },
      403
    );
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogId = c.req.param("id");
  if (!blogId) {
    return c.json(
      {
        message: "Blog id is missing",
      },
      404
    );
  }
  try {
    const blogId = c.req.param("id");
    const blog = await prisma.post.findFirst({
      where: {
        id: blogId,
      },
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            upvotes: true,
          },
        },
        createdAt: true,
      },
    });
    return c.json(
      {
        message: "Blog fetched successfully",
        blog,
      },
      201
    );
  } catch (err) {
    return c.json(
      {
        message: "Error occurred while fetching blog",
        err,
      },
      403
    );
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    const { success } = blogCreationInput.safeParse(body);
    if (!success) {
      return c.json(
        {
          message: "Inavlid Input !!",
        },
        401
      );
    }
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("userId"),
      },
    });
    return c.json(
      {
        message: "Post has been created successfully",
        blog,
      },
      200
    );
  } catch (err) {
    return c.json(
      {
        message: "Error occurred while creating a post",
        err,
      },
      401
    );
  }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    const { success } = blogUpdateInput.safeParse(body);
    if (!success) {
      return c.json(
        {
          message: "Inavlid Input !!",
        },
        401
      );
    }
    const blog = await prisma.post.update({
      where: {
        id: body.id,
        authorId: c.get("userId"),
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json(
      {
        message: "Post has been updated successfully",
        blog,
      },
      200
    );
  } catch (err) {
    return c.json(
      {
        message: "Error occurred while updating the post",
        err,
      },
      401
    );
  }
});

blogRouter.delete("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogId = c.req.param("id");
  if (!blogId) {
    return c.json(
      {
        message: "Blog id is missing",
      },
      404
    );
  }
  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: blogId,
      },
    });
    if (!blog)
      return c.json({ message: "Record to delete does not exist." }, 404);
    const res = await prisma.post.delete({
      where: {
        id: blogId,
      },
    });
    return c.json(
      {
        message: ` Blog with blog-id: ${blogId} successfully deleted`,
        res,
      },
      200
    );
  } catch (error) {
    return c.json(
      {
        message: "Error whlie deleting a blog !!",
        error,
      },
      500
    );
  }
});

blogRouter.post("/upvote/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogId = c.req.param("id");
  if (!blogId) {
    return c.json(
      {
        message: "Blog id is missing",
      },
      404
    );
  }

  try {
    const response = await prisma.upvotes.create({
      data: {
        userId: c.get("userId"),
        postId: blogId,
      },
    });
    return c.json({
      message: "Post has been upvoted successfully",
      response,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return c.json(
        { message: "You have already upvoted this post once" },
        400
      );
    }
    return c.json(
      {
        message: "Error whlie upvoting a blog !!",
        error,
      },
      500
    );
  }
});

blogRouter.post("/downvote/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogId = c.req.param("id");
  if (!blogId) {
    return c.json(
      {
        message: "Blog id is missing",
      },
      404
    );
  }

  try {
    const response = await prisma.upvotes.delete({
      where: {
        userId_postId: {
          userId: c.get("userId"),
          postId: blogId,
        },
      },
    });
    return c.json({
      message: "Post has been downvoted successfully",
      response,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return c.json(
        { message: "You have already downvoted this post once" },
        400
      );
    }
    return c.json(
      {
        message: "Error whlie downvoting a blog !!",
        error,
      },
      500
    );
  }
});

blogRouter.get("/upvotes/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogId = c.req.param("id");
  if (!blogId) {
    return c.json(
      {
        message: "Blog id is missing",
      },
      404
    );
  }

  try {
    const response = await prisma.upvotes.count({
      where: {
        postId: blogId,
      },
    });
    return c.json(
      {
        message: "Number of upvotes on this blog:",
        response,
      },
      201
    );
  } catch (error: any) {
    return c.json(
      {
        message: "Error Fetching upvote for this blog !!",
        error,
      },
      500
    );
  }
});
