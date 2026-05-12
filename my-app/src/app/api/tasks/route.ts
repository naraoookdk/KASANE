import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET() {
  const tasks = await prisma.task.findMany();

  return Response.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();

  const task = await prisma.task.create({
    data: {
      title: body.title,
    }
  });

  return Response.json(task);
}