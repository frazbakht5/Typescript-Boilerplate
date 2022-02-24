// import HttpResponse from '@expresso/modules/Response/HttpResponse'
// import ResponseError from '@expresso/modules/Response/ResponseError'
// import v1Route from '@routes/v1'
import frazRoute from '@routes/frazTest/routes'
import Express from 'express'
// import { Request, Response } from 'express'

const route = Express.Router()

route.use('/testroute', frazRoute)

export default route
