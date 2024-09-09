import dotenv from "dotenv"
import { InitOptions } from "payload/config"
import payload from 'payload'

import path from "path"
dotenv.config({
    path: path.resolve(__dirname,  '../.env')
})

let cached = (global as any).payload

if(!cached){
    cached = ( global as any ).payload = {
        client: null,
        promise: null
    }
}

interface Args{
    initOpts?: Partial<InitOptions>
}

export const getPayloadClient = async ({initOpts}: Args = {}) => {
    if(!process.env.PAYLOAD_SECRET){
        throw new Error("Missing Payload Secret")
    }

    if(cached.client){
        return cached.client
    }

    cached.promise = payload.init({
        secret: process.env.PAYLOAD_SECRET,
        local: initOpts?.express ? false : true,
        ...(initOpts || {})
    })

    try {
        
        cached.client = await cached.promise

    } catch (error: unknown) {
        console.log(error);
        cached.client = null
    }

    return cached.client
    
}