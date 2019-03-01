export const ORIGIN = {
  production: window.location.origin,
  development: `http://${window.location.hostname}:3009`,
  test: window.location.origin,
  // dev: 'http://localhost:3009',
}[process.env.NODE_ENV || 'development'];