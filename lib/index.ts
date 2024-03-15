export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://dzio.fun'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
