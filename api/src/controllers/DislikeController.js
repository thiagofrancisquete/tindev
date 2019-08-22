const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    // verificando se o dev existe
    if (!targetDev) {
      return res.status(400).json({ error: 'dev not found' });
    }

    // armazenando o dislike no array do banco
    loggedDev.dislikes.push(targetDev._id);

    // salvando esse dislike
    await loggedDev.save();

    return res.json(loggedDev);
  }
};