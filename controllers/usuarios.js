const { response, request } = require('express');

const usariosGet =  (req = request, res = response) => {

    // const query = req.query;
    const {q, nombre = "No name", apikey} = req.query;
    
    res.status(201).json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {

    // const body = req.body;
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}