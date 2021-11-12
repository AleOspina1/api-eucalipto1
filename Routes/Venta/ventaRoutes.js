const ventaRoute = require('express').Router();
const ventaController = require('../../controllers/Venta/ventaControllers')

ventaRoute.get('/', ventaController.obtener);
ventaRoute.post('/', ventaController.crear);
ventaRoute.delete('/:id', ventaController.delete);
ventaRoute.patch('/:id', ventaController.edit)


module.exports= ventaRoute;