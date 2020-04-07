const {
    Router
} = require('express');
const router = Router();

const Persona = require('../models/Persona');


router.get('/personas', async (req, res) => {
    const personas = await Persona.find().sort([
        ['updatedAt', 'descending']
    ]);

    res.render('personas/new-persona', {
        personas
    });
});

router.post('/personas/new-persona', async (req, res) => {
    const {
        dni,
        nombre,
        direccion
    } = req.body;
    const errors = [];

    if (errors.length > 0) {
        res.render("personas/new-persona", {
            errors, //No se quita
            dni,
            nombre,
            direccion
        });
    } else {

        const newPersona = new Persona({
            dni,
            nombre,
            direccion,
            Socio: [dni,{}]
        });
        console.log("Persona " + newPersona)
        //newProducto.user = req.user.id;
        await newPersona.save();
        //req.flash("success_msg", "Producto Añadido");
        res.redirect("/personas");
    }
});

router.get('/productos/edit/:id', async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    /*if (producto.user != req.user.id) {
        req.flash("error_msg", "Not Authorized");
        return res.redirect("/notes");
    }*/
    res.render("productos/edit-producto", {
        producto
    });
});

router.put('/productos/edit-producto/:id', async (req, res) => {
    const {
        CodigoMateriaPrima,
        Descripcion,
        PuntosReOrden,
        UnidadDeMedida
    } = req.body;
    await Producto.findByIdAndUpdate(req.params.id, {
        CodigoMateriaPrima,
        Descripcion,
        PuntosReOrden,
        UnidadDeMedida
    });
    req.flash("success_msg", "Producto Editado Exitosamente");
    res.redirect("/productos");
});

router.delete('/productos/delete/:id', async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Producto Eliminado Exitosamente");
    res.redirect("/productos");
});




module.exports = router;