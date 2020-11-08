import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app: express.Application = express()

app.listen(process.env.PORT, () => console.log(`server started at port: ${process.env.PORT}`))