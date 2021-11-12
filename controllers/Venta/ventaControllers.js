const ventaController ={}
const Venta = require('../../models/Venta/ventaModels')

ventaController.obtener = async(req, res) =>{
    try{
        let user = await Venta.find();
    res.send(user)
    }catch (err){
        res.send(err)
    }
}

ventaController.crear = async(req, res) =>{
    try {            const{
                idVenta, 
                valorVenta,
                idProducto,
                cantidad,
                precioUnitario,
                fecha,
                nombreCliente,
                documentoCliente,
                vendedor,
                estado

            } = req.body;

            const venta = Venta({
                idVenta, 
                valorVenta,
                idProducto,
                cantidad,
                precioUnitario,
                fecha,
                nombreCliente,
                documentoCliente,
                vendedor,
                estado
            });

            const ventaSave = await venta.save();
            res.status(201).send({clienteSave})

    } catch (error) {
        res.status(500).send({message: error.message})
        
}

}

ventaController.edit = async (req, res) =>{
    let ventaId = req.params.id;
    let data = req.body;
    let ventaUpdate = await Venta.findByIdAndUpdate(ventaId, data, (err, Prod)=>{
        if(err) res.status(500).send({message: `error al actualizar la venta ${err}`});

        res.status(200).send({ venta: Prod })
    })

    
}

ventaController.delete = async(req, res)=>{
    let ventaId = req.params.id
    let ventaDelete =  await Venta.findById(ventaId, (err, venta)=>{
        if(err) res.status(500).send({message: `error al borrar la venta ${err}`});

        venta.remove(err =>{
            if(err) res.status(500).send({message: `error al borrar la venta ${err}`});
            res.status(200).send({message: 'Venta elimindada'})
        })

    })
}

module.exports = ventaController;
