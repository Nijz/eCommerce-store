import { z } from "zod"

export const authValidator = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message: "Password must be 6 character long"})
})

export type TAuthValidato = z.infer<typeof authValidator>
      