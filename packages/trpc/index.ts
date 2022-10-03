import * as trpc from "@trpc/server";
import { z } from "zod";

export type Context = {
  time: number;
};

export const createRouter = () => {
  return trpc.router<Context>();
};

export const test = createRouter().query("test", {
  input: z.object({
    param: z.string(),
  }),
  output: z.string(),
  async resolve({ ctx }) {
    return "hello";
  },
});

export const appRouter = createRouter().merge("auth.", test);
export type AppRouter = typeof appRouter;
