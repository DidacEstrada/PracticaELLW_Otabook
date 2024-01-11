const {createManga, findMangaByTitol} = require('../models/mangues.repository');

async function registerManga(req, res) {
  console.log(req.body);
  console.log(req.headers);
 
  const titol = req.body.titol;

  const foundManga = await findMangaByTitol(titol);
  if (foundManga) {
    return res.status(400).send('Manga already exists');
  }
  const newManga = await createManga(req.body);
  res.json(newManga);
}

module.exports.registerManga = registerManga;