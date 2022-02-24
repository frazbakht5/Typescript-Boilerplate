import { Request, Response } from 'express'
// import { CompanyAttributes } from '@database/models/companyModel'

export default class FrazTestController {
  static async testHandler(req: Request, res: Response): Promise<Response> {
    console.log('In function FrazTestController.testHandler')
    /* 
    const bodyParams = req.body

    const entry: CompanyAttributes = {
      name: '',
      url: '',
      logo: '',
      current_plan: '',
      plan_purchasing_date: '',
      plan_expiry_date: '',
      total_assessments: 0,
      total_candidates: 0,
    }
 */
    return res.json('Success: Welcome to my API')
  }
}
