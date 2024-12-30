
const Image = require('../models/Image');

exports.getImages = async (req, res) => {
    try {
        const images = await Image.find({ userId: req.user.id });
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener imágenes', error });
    }
};

exports.addImage = async (req, res) => {
    const { title, url } = req.body;
    try {
        const newImage = new Image({ title, url, userId: req.user.id });
        await newImage.save();
        res.status(201).json({ message: 'Imagen añadida exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al añadir imagen', error });
    }
};

exports.updateImage = async (req, res) => {
    const imageId = req.params.id;
    const updates = req.body;
    try {
        const updatedImage = await Image.findByIdAndUpdate(imageId, updates, { new: true });
        res.status(200).json(updatedImage);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar imagen', error });
    }
};

exports.deleteImage = async (req, res) => {
    const imageId = req.params.id;
    try {
        await Image.findByIdAndDelete(imageId);
        res.status(200).json({ message: 'Imagen eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar imagen', error });
    }
};
