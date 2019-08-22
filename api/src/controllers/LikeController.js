const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    // guardam as instancias dos usuarios no bd
    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    // verificando se o usuario alvo existe
    if (!targetDev) {
      return res.status(400).json({ error: 'Dev nao existe' });
    }

    // verificando se deu match
    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('Deu match');
    }

    // salvando o id de quem o usuario deu like => nao modifica a bd
    loggedDev.likes.push(targetDev._id);

    // salvando no bd
    await loggedDev.save();

    return res.json(loggedDev);
  }
};
