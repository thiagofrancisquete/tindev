const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const { username } = req.body;

    // procurando se o usuario ja existe no bd
    const userExists = await Dev.findOne({ user: username });

    // se o usuario ja existir ele retorna o mesmo sem criar um novo
    if (userExists) {
      return res.json(userExists);
    }

    // expera o get pra retornar os dados no json
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    // importando os dados necessarios da api
    const { name, bio, avatar_url: avatar } = response.data;

    // informacoes que serao armazenadas no bd
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  }
};
