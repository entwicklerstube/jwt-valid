export const parseBase64ByPlattform = base64String => {
  if (!base64String || !isValidBase64(base64String)) throw new Error('No valid base64 passed')

  if (typeof window === 'undefined' && (process && process.version !== 'undefined')) {
    return Buffer.from(base64String, 'base64').toString()
  } else {
    return window.atob(base64String)
  }
}

export const isValidBase64 = base64String => {
  if (!base64String) return false
  if (!(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(base64String))) return false

  return true
}

export const parseJwtToken = jwtToken => {
  if (!jwtToken) return false
  if (typeof jwtToken !== 'string') return false

  const jwtTokenParts = jwtToken.split('.')
  if (jwtTokenParts.length !== 3) return false

  try {
    JSON.parse(parseBase64ByPlattform(jwtTokenParts[0]))
    JSON.parse(parseBase64ByPlattform(jwtTokenParts[1]))
    return true
  } catch (err) {
    return false
  }
}

export default parseJwtToken
