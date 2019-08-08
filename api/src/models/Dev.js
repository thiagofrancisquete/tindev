const { Schema, model } = require('mongoose');

// => estrutura da tabela do bd pra armazenar o desenvolvedor
const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    bio: String,
    avatar: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Dev', DevSchema);
