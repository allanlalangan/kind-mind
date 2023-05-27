import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const guestEntriesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.guestJournalEntry.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  getEntry: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.guestJournalEntry.findUnique({
        where: { id: input.id },
      });
    }),

  createEntry: publicProcedure
    .input(z.object({ content: z.string(), title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.guestJournalEntry.create({
        data: {
          content: input.content,
          title: input.title,
        },
      });
    }),

  updateEntry: publicProcedure
    .input(z.object({ content: z.string(), title: z.string(), id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.guestJournalEntry.update({
        where: { id: input.id },
        data: {
          title: input.title,
          content: input.content,
        },
      });
    }),

  deleteEntry: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.guestJournalEntry.delete({
        where: { id: input.id },
      });
    }),
});
