import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const entriesRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.journalEntry.findMany({
      where: { userId: ctx.session.user.id },
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  getEntry: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.journalEntry.findUnique({ where: { id: input.id } });
    }),

  createEntry: protectedProcedure
    .input(z.object({ content: z.string(), title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.journalEntry.create({
        data: {
          content: input.content,
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),

  updateEntry: protectedProcedure
    .input(z.object({ content: z.string(), title: z.string(), id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.journalEntry.update({
        where: { id: input.id },
        data: {
          title: input.title,
          content: input.content,
        },
      });
    }),

  deleteEntry: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.journalEntry.delete({
        where: { id: input.id },
      });
    }),
});
