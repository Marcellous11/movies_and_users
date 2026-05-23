import {Router} from 'express'
import {userRoutes} from './users.js'
import {movieRoutes} from './movies.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json' with {type:"json"}

const router = Router()

router.use('/api-docs',swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

router.use("/users",userRoutes)
router.use("/movies",movieRoutes)

export {router}



