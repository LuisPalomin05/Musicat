const {Router} = require('express');
const router = Router();

const {getAlbums, getAlbum, createAlbum, updateAlbum, deleteAlbum} = require('../controllers/album.Controller.js');

router.route('/')
    .get(getAlbums)
    .post(createAlbum);

router.route('/:id')
    .get(getAlbum)
    .put(updateAlbum)
    .delete(deleteAlbum);

module.exports = router;
