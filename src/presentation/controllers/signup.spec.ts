import { SignUpController } from './signup'
import { MissingParamError } from '../erros/missing-param-erro'

describe('SignUp Controller', () => {
  test('Should retorn 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'any name',
        email: 'anyemail@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should retorn 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any name',
        // email: 'anyemail@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should retorn 400 if no password is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any name',
        email: 'anyemail@gmail.com',
        // password: '123456',
        passwordConfirmation: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})
