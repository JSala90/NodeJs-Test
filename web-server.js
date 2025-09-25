const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Servir archivos estáticos
app.use(express.static(__dirname));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log('🚀 Servidor web ejecutándose en: http://localhost:' + port);
    console.log('📱 Ve a la pestaña "Ports" y haz click en el globo/link');
    console.log('🎯 Desarrolla el visualizador 3D - luego en local será Electron');
});