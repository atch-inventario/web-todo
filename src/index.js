// Importar dependencias
const express = require('express');
const sequelize = require('./config/database');
const path = require('path');

// Configuración
const app_express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app_express.use(express.json());
app_express.set('view engine', 'ejs');
app_express.set('views', path.join(__dirname, 'views'));
app_express.use(express.static(path.join(__dirname, 'public')));

// Rutas 
const UnidadMedidaRoutes = require('./routes/UnidadMedidaRoutes');
const TipoDocumentoRoutes = require('./routes/TipoDocumentoRoutes');
const ArticuloRoutes = require('./routes/ArticuloRoutes');
const EntradaRoutes = require('./routes/EntradaRoutes');
const SalidaRoutes = require('./routes/SalidaRoutes');
const InventarioRoutes = require('./routes/InventarioRoutes');
const viewsRoutes = require('./routes/viewsRoutes');
app_express.use('/api/unidades-medida', UnidadMedidaRoutes);
app_express.use('/api/tipos-documento', TipoDocumentoRoutes);
app_express.use('/api/articulos', ArticuloRoutes);
app_express.use('/api/entradas', EntradaRoutes);
app_express.use('/api/salidas', SalidaRoutes);
app_express.use('/api/inventario', InventarioRoutes);
app_express.use('/', viewsRoutes);

// Servidor
const startServer = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync(); //    { force: true }
      app_express.listen(PORT, () => {
        console.log(`\nServidor corriendo en http://localhost:${PORT}\n`);
      });
    } catch (error) {
      console.error( error);
    }
};startServer();

/*--------------------------------------------------------/•/
npm init -y
npm install sqlite3 sequelize express ejs
npm list --depth=0
/•-------------------------------------------------------/*/


// forever-npm
//  npm start
//  
