const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/courses');
const verifyToken = require('../middlewares/verifyToken')
const access = require('../middlewares/permission')



router.post('/', verifyToken, access('admin'), coursesHandler.create)
router.put('/:id', verifyToken, access('admin'), coursesHandler.update)
router.delete('/:id', verifyToken, access('admin'), coursesHandler.destroy)


router.get('/:id', coursesHandler.get)
router.get('/', coursesHandler.getAll)





module.exports = router;