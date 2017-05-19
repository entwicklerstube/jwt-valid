import { parseBase64ByPlattform, isValidBase64, parseJwtToken } from './index'

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3QiOiJpcyBhd2Vzb21lISJ9.j8Z3twgi5nCrZJXH1JoxfQ8q1u5btwr3vS3wyqfytOo'

describe('JWT Valid', () => {
  describe('isValidBase64', () => {
    it('returns false if a not valid base64 string is passed', () => {
      expect(isValidBase64('No Valid Base64 String')).to.equal(false)
    })

    it('returns true if a valid base64 string is passed', () => {
      expect(isValidBase64('SSBhbSB2YWxpZA==')).to.equal(true)
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
    it('returns a boolean', () => {
      expect(parseJwtToken()).to.be.a('boolean')
    })

    it('returns false if no token is passed', () => {
      expect(parseJwtToken()).to.equal(false)
    })

    it('returns false if wired stuff is passed', () => {
      expect(parseJwtToken('iam wired')).to.equal(false)
    })

    it('returns false if a non-string type is passed', () => {
      expect(parseJwtToken(123)).to.equal(false)
      expect(parseJwtToken([])).to.equal(false)
      expect(parseJwtToken({})).to.equal(false)
    })

    it('returns true if a valid jwt token is passed', () => {
      expect(parseJwtToken(jwtToken)).to.equal(true)
    })
  })
})
