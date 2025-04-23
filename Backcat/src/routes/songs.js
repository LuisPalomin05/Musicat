const {Router} = require('express');
const router = Router();

const {getSongs, getSong, createSong, updateSong, deleteSong} = require('../controllers/songs.controller.js');

router.route('/')
    .get(getSongs)
    .post(createSong);

router.route('/:id')
    .get(getSong)
    .put(updateSong)
    .delete(deleteSong);

module.exports = router;