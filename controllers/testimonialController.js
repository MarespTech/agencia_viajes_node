const guardarTestimonial = (req, res) => {
    // Validar formulario 
    const { nombre, correo, mensaje} = req.body;
    const errores = [];
    if(nombre.trim() === '') {
        errores.push({mensaje: 'El Nombre esta vacio'});
    }
    if(correo.trim() === '') {
        errores.push({mensaje: 'El Correo esta vacio'});
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El Mensaje esta vacio'});
    }

    if(errores.length > 0) {
        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        });
    }
}

export {
    guardarTestimonial
}