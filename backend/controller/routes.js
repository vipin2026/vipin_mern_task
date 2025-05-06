const express = require('express')
const router  = express.Router()

const controller = require('./controller')

router.post('/create_blog',controller.create_blog)
router.delete('/delete_blog', controller.delete_blog)
router.post('/update_blog',controller.update_blog)
router.get('/get_blog',controller.get_blog)

module.exports = router