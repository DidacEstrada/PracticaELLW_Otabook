const { findMangaByTitol, findMangaByAutor, findMangaByGenere, findAllMangas, findMangaByTitolExacte} = require('../models/mangues.repository');

async function getManga(req, res) {
  console.log(req.params);
  console.log(req.headers);
  const mangaTitol= req.params.titol;
  const manga = await findMangaByTitolExacte(mangaTitol);
  if (!manga) {
    return res.status(400).send('No existeix aquest manga');
  }
  res.json(manga);
}

async function getMangaByQualsevolTitol(req, res) {
  const mangaTitolEncoded = req.params.titol;
  const mangaTitol = decodeURIComponent(mangaTitolEncoded);

  // Modificar la búsqueda para que sea insensible a mayúsculas y minúsculas, y acepte espacios
  const manga = await findMangaByTitol(mangaTitol);

  if (!manga) {
    // Si no se encuentra, intentar buscar el título exacto sin espacios
    const mangaExacto = await findMangaByTitolExacto(mangaTitol);

    if (!mangaExacto) {
      return res.status(400).send('No existeix aquest manga');
    }

    res.json(mangaExacto);
  }

  res.json(manga);
}

async function getMangasByAutor(req, res) {
  console.log(req.params);
  console.log(req.headers);
  const mangaAutor= req.params.autor;
  const manga = await findMangaByAutor(mangaAutor);
  if (!manga || manga.length === 0) {
    return res.status(400).send('No existeix cap manga de aquest autor');
  }
  res.json(manga);
}

async function getMangasByGenere(req, res) {
  console.log(req.params);
  console.log(req.headers);
  const mangaGenere= req.params.genere.split(',');
  const manga = await findMangaByGenere(mangaGenere);
  if (!manga || manga.length === 0) {
    return res.status(400).send('No existeix cap manga de aquest genere');
  }
  res.json(manga);
}

async function getAllMangas(req, res) {
  console.log(req.params);
  console.log(req.headers);
  const manga = await findAllMangas();
  if (!manga || manga.length === 0) {
    return res.status(400).send('No existeix cap manga');
  }
  res.json(manga);
}

module.exports.getManga = getManga;
module.exports.getMangasByAutor = getMangasByAutor;
module.exports.getMangasByGenere = getMangasByGenere;
module.exports.getAllMangas = getAllMangas;
module.exports.getMangaByQualsevolTitol = getMangaByQualsevolTitol;