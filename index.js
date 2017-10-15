const next = require('next')
const Router = require('router')
const finalhandler = require('finalhandler')

const router = Router()

router.get('/api/stats', require('./api/stats'))
router.get('*', require('./app')

module.exports = (req, res) => {
  router(req, res, finalhandler(req, res))
}
