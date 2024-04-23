const { Joi } = require('celebrate');
const dotenv = require('dotenv');

dotenv.config();
class EnvConfig {
  static get schema () {
    return {
      PORT: Joi.number().optional(),
      MONGO_DB_URI: Joi.string().required(),
    };
  }

  static get values () {
    return {
      PORT: process.env.PORT,
      MONGO_DB_URI: process.env.MONGO_DB_URI,
    };
  }
}

const configurations = EnvConfig.values;

const { error } = Joi.object(EnvConfig.schema).validate(configurations);

if (error) {
  console.error(error.details[0].message);
  process.exit(0);
}

module.exports = configurations;
