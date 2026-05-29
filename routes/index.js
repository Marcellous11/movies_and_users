import {Router} from 'express'
import {userRoutes} from './users.js'
import {movieRoutes} from './movies.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json' with {type:"json"}
import passport from 'passport'

const router = Router()

router.use('/api-docs',swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

router.use("/users",userRoutes)
router.use("/movies",movieRoutes)

router.get("/login",passport.authenticate('github'),(req,res)=>{})

router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if (err){return next(err)}
        res.redirect("/")
    })
})
export {router}



