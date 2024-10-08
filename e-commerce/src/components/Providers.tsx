"use client"

import { PropsWithChildren, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { trpc } from "@/trpc/client"
import { httpBatchLink } from "@trpc/client"


const Providers = ({children}: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links:[
            httpBatchLink({
                url: `${process.env.NEXT_SERVER_PUBLIC_URL}/api/trpc`,
                fetch(url, options){
                    return fetch(url, {
                        ...options,
                        credentials: 'include'
                    })
                }
            })
        ]
    }))

    return (
        <trpc.Provider queryClient={queryClient} client={trpcClient} >
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    )
}

export default Providers