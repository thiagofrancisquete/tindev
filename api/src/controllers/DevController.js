const axios = require('axios');

module.exports = {
  async store(req, res) {
    const { username } = req.body;

    // expera o get pra retornar os dados no json
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    return res.json(response.data);
  }
};
