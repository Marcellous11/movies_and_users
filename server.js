import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import {router} from './routes/index.js'
import {ConnectDatabase,closeDatabase} from './data/db.js'

const app = express()
let port = process.env.PORT || 8000

app.use(express.json())
app.use(cors())


app.use(router)

app.use((req,res,next)=>{
    const error = new Error("Page not found")
    error.status = 404
    next(error) 
})

app.use((err,req,res,next)=>{
    console.log(err)
    const status = err.status || 500
    res.status(status).json({error:err.message})
})

ConnectDatabase().then(()=>{
    app.listen(port,()=>{
        console.log(`Connected at port ${port}`)
    })
}).catch((err)=>{
    console.log(`Start up failure. ${err}`)
    process.exit(1)

})

async function gracefulShutdown(){
    console.log('Shuting down...')
    //need to close db here
    await closeDatabase()
    process.exit(0)
}

process.on('SIGINT',gracefulShutdown)
process.on('SIGTERM',gracefulShutdown)