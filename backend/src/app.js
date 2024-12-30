
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const userRoutes = require('./routes/userRoutes');
const imageRoutes = require('./routes/imageRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.log('Error al conectar a MongoDB', err));

app.use('/api/users', userRoutes);
app.use('/api/images', imageRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
