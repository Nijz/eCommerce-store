"use client"

import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import  {zodResolver} from "@hookform/resolvers/zod"
import {z} from 'zod'
import { authValidator } from "@/lib/validators/account-credentails-validator"
import { TAuthValidato } from "@/lib/validators/account-credentails-validator"

const Page = () => {

    const { register, handleSubmit, formState:{errors} } = useForm<TAuthValidato>({
        resolver: zodResolver(authValidator),
    })

    function submitHandler({email, password}: TAuthValidato){
        // yt chechmark 3 hr
    }

    return(
        <>
            <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
                <div className="mx-auto w-full space-y-6 sm:w-[350px] flex flex-col justify-center">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        
                        <Icons.logo className="h-20 w-20"/>
                        
                        <h1 className="font-bold text-2xl">
                            Create Account
                        </h1>

                    </div>

                    <div className="grid gap-6">
                            <form onSubmit={handleSubmit(submitHandler)}>
                                <div className="gird gap-2">
                                    
                                    {/* email field */}
                                    
                                    <div className="gird gap-1 py-2">
                                        <Label htmlFor="email">
                                            E-mail
                                        </Label>
                                        <Input
                                            {...register('email')}
                                            className={cn({" focus-visible:ring-red-500" : errors.email,})}
                                            placeholder="example@gmail.com"
                                        />
                                    </div>

                                    {/* password field */}

                                    <div className="gird gap-1 py-2">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <Input
                                            className={cn({" focus-visible:ring-red-500" : errors.password,})}
                                            {...register('password')}
                                            placeholder="Enter your Password"
                                        />
                                    </div>
                                    <div className="grid gap-1 py-2">
                                        <Button className="font-semibold">Create Account</Button>
                                    </div>
                                </div>
                            </form>
                    </div>

                    <Link href='/sign-in' className={ cn("underline gap-1", buttonVariants({variant: 'link'}))}>
                            Already have an account ? Login
                            <ArrowRight className="h-4 w-4"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Page