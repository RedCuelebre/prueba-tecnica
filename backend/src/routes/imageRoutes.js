
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/images', authMiddleware, imageController.getImages);
router.post('/images', authMiddleware, imageController.addImage);
router.put('/images/:id', authMiddleware, imageController.updateImage);
router.delete('/images/:id', authMiddleware, imageController.deleteImage);

module.exports = router;
