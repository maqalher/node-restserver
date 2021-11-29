const { Router } = require('express');
const { usariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios');
const router = Router();

router.get('/', usariosGet );

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);



module.exports = router;
