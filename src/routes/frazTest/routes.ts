import frazTestController from '@controllers/frazTest/controller'
import Express from 'express'

const route = Express.Router()
route.get('/', frazTestController.testHandler)

export default route
