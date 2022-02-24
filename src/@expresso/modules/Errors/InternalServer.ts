import BaseResponse from './BaseResponse';


class InternalServer extends BaseResponse {
  public code: number
  public message: string
  constructor(message: string, code = 500) {
    super(message, code)
    Object.setPrototypeOf(this, InternalServer.prototype)
  }
  getResponse = () => {
    return {
      code: this.code,
      message: this.message
    }
  }
}

export default InternalServer
