const express = require('express');
const router = express.Router();

const reviewsHandler = require('./handler/reviews');
const verifyToken = require('../middlewares/verifyToken')



router.post('/', reviewsHandler.create)
router.put('/:id', verifyToken, reviewsHandler.update)
router.delete('/:id', verifyToken, reviewsHandler.destroy)





module.exports = router;