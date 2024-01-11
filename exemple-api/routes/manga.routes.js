const express = require('express');
const { getManga, getMangasByAutor, getMangasByGenere, getAllMangas, getMangaByQualsevolTitol } = require('../controllers/get-manga.controller');
const { checkSecretMiddleware } = require('../middlewares/check.secret.middleware');
const { registerManga } = require('../controllers/register-manga.controller');

const router = express.Router();

router.get('/titol/:titol', getManga);
router.get('/busqueda/:titol', getMangaByQualsevolTitol);
router.get('/', getAllMangas);
router.get('/autor/:autor', getMangasByAutor);
router.get('/genere/:genere', getMangasByGenere);
router.post('/', registerManga);

module.exports.mangaRouter = router;