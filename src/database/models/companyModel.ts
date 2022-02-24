import SequelizeAttributes from '@expresso/utils/SequelizeAttributes'
import { Model, Optional } from 'sequelize'
import db from './_instance'

// entity
export interface CompanyAttributes {
  id?: number
  name: string
  url: string
  logo: string
  primary_color?: string
  secondary_color?: string
  current_plan: string
  plan_purchasing_date: string
  plan_expiry_date: string
  total_assessments: number
  total_candidates: number
  createdAt?: Date
  updatedAt?: Date
}

// creation attributes
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'> {}

// instance
export interface CompanyInstance extends Model<CompanyAttributes, CompanyCreationAttributes>, CompanyAttributes {}

// class entity
class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
  id?: number | undefined
  name: string
  url: string
  logo: string
  primary_color?: string | undefined
  secondary_color?: string | undefined
  current_plan: string
  plan_purchasing_date: string
  plan_expiry_date: string
  total_assessments: number
  total_candidates: number
  createdAt?: Date | undefined
  updatedAt?: Date | undefined
}

// init model
Company.init(
  {
    ...SequelizeAttributes.Company,
  },
  // @ts-expect-error
  { sequelize: db.sequelize, tableName: 'Company', paranoid: true }
)

export default Company
