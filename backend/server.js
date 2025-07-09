
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const registroRoutes = require('./routes/registro');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', registroRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido al backend de la Calculadora Cocalera');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
