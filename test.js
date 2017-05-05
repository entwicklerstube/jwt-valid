import jwtValid, { parseBase64ByPlattform, isValidBase64, parseJwtToken } from './index'

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3QiOiJpcyBhd2Vzb21lISJ9.j8Z3twgi5nCrZJXH1JoxfQ8q1u5btwr3vS3wyqfytOo'

describe('JWT Valid', () => {
  describe('isValidBase64', () => {
    it('returns false if a not valid base64 string is passed', () => {
      expect(isValidBase64('No Valid Base64 String')).to.be.false
    })

    it('returns true if a valid base64 string is passed', () => {
      expect(isValidBase64('SSBhbSB2YWxpZA==')).to.be.true
    })
  })

  describe('parseBase64ByPlattform', () => {
    it('returns error if no valid token is passed', () => {
      expect(() => parseBase64ByPlattform()).to.throw('No valid base64 passed')
    })

    it('returns encoded base64 string', () => {
      expect(parseBase64ByPlattform('SGVsbG8gV29ybGQ=')).to.equal('Hello World')
    })
  })

  describe('parseJwtToken', () => {
    it('returns error if nothing is passed', () => {
      expect(() => parseJwtToken()).to.throw('No valid JWT token passed')
    })

    it('returns error if no valid token is passed', () => {
      expect(() => parseJwtToken('iam-no-jwt-token')).to.throw('No valid JWT token passed')
    })

    it('returns error if no valid token is passed', () => {
      expect(() => parseJwtToken('a.b.c')).to.throw('No valid JWT token passed')
    })

    it('returns error if no valid token is passed', () => {
      expect(() => parseJwtToken('SGVsbG8gV29ybGQ=.SGVsbG8gV29ybGQ=.foobar')).to.throw('No valid JWT token passed')
    })

    it('returns error if no valid token is passed', () => {
      expect(() => parseJwtToken('eyJhbGciOiJpbnZhbGlkIiwidHlwIjoiaW52YWxpZCJ9.eyBub3RoaW5nOiAndHJ1ZScgfQ==.some_signature')).to.throw('No valid JWT token passed')
    })

    it('returns a object', () => {
      expect(parseJwtToken(jwtToken)).to.be.a('object')
    })

    it('returns a object with the props header, payload and signature', () => {
      expect(parseJwtToken(jwtToken)).to.include.keys('header', 'payload', 'signature')
    })

    it('returns a object with the header containing the decoded informations', () => {
      expect(parseJwtToken(jwtToken).header).to.deep.equal({ alg: 'HS256', typ: 'JWT' })
    })

    it('returns a object with the payload containing the decoded informations', () => {
      expect(parseJwtToken(jwtToken).payload).to.deep.equal({ jwt: 'is awesome!' })
    })

    it('returns a object with the signature string', () => {
      expect(parseJwtToken(jwtToken).signature).to.equal(jwtToken.split('.')[2])
    })
  })
})
