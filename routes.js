const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('index', '/')
routes.add('create', '/posts/new')
routes.add('post', '/posts/:slug')
