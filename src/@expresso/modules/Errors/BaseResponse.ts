class BaseResponse extends Error {
  public code: number
  public message: string

  constructor(message: string, code = 500) {
    super(message)
    this.message = message
    this.code = code

    Object.setPrototypeOf(this, BaseResponse.prototype)
  }

  getResponse = () => {
    return {
      code: this.code,
      message: this.message
    }
  }
}

export default BaseResponse
