import express from 'express'
import { getPayloadClient } from './get-payload-client'
import { nextApp, nextHandler } from './next-utlis'

const app = express()
const PORT = Number(process.env.PORT) || 3000

const start = async () => {
    const payload = await getPayloadClient({
        initOpts: {
            express: app,
            onInit: async (cms: any) => {
                cms.logger.info(`Admin url ${cms.getAdminURL()}`)
            }
        }
    })

    app.use((req, res) => nextHandler(req, res))
    nextApp.prepare().then(() => {
        payload.logger.info('Next Js Started')
        app.listen(PORT, async()=> {
            payload.logger.info(`Next.js App Url: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
        })
    })
}

start()
