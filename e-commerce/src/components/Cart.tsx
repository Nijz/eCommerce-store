"use client"

import { ShoppingCartIcon } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator";
import { formatePrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Cart = () => {
    
    const itemCount = 0;
    const fee = 10

    return (    
        <div>
            <Sheet>
                <SheetTrigger className="group -m-2 flex items-center p-2">
                    <ShoppingCartIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"/>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 ">
                        0
                    </span>
                </SheetTrigger>
                <SheetContent className="flex flex-col w-full pr-0 sm:max-w-lg">
                    <SheetHeader className="space-y-2.5 pr-6">
                        <SheetTitle>
                            Cart (0)
                        </SheetTitle>
                    </SheetHeader>
                    {
                        itemCount > 0 ? (
                            <>
                                <div className="flex flex-col w-full pr-6">
                                    {/* TODO: CART LOGIC */}

                                    Cart items
                                </div>
                                <div className="space-y-4 pr-6">
                                    <Separator/>
                                    <div className="space-y-1.5 text-sm">
                                        <div className="flex ">
                                            <span className="flex-1">Shipping</span>
                                            <span>Free</span>
                                        </div>
                                        <div className="flex ">
                                            <span className="flex-1">Transaction Fee</span>
                                            <span>{formatePrice(fee)}</span>
                                        </div> 
                                        <Separator/>
                                        <div className="flex ">
                                            <span className="flex-1">Total Fee</span>
                                            <span>{formatePrice(fee)}</span>
                                        </div> 
                                    </div>

                                    <SheetFooter>
                                        <SheetTrigger asChild>
                                            <Link 
                                                href={'/cart'}
                                                className={buttonVariants({
                                                    className: "w-full",
                                                })}
                                            >
                                                Continue to Checkout
                                            </Link>
                                        </SheetTrigger>
                                    </SheetFooter>

                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full space-y-1">
                                <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                                    <Image src='/hippo-empty-cart.png' alt="Empty cart" fill />
                                </div>
                                <p className="font-semibold text-xl">Cart is empty</p>
                                <SheetTrigger asChild>
                                    <Link 
                                        href='/products'
                                        className={buttonVariants({
                                            variant: "link",
                                            className: "text-sm text-muted-foreground",
                                            size: "sm"
                                        })}
                                    >
                                        Add Items to your cart...
                                    </Link>
                                    {/* YT TIME -> 1.55 hr */}
                                </SheetTrigger>
                            </div>
                        )
                    }
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Cart