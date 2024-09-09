import { publicProcedure, router } from "./trpc"

export const appRouter = router({
    anyApiRoutes: publicProcedure.query(() => {
        return 'hello'
    })
})

export type AppRouter = typeof appRouter