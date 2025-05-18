const Joi = require('joi');

const userValidationSchema = Joi.object({
  age: Joi.number().required(),
  interests: Joi.array().items(Joi.string()).min(1).required(),
  budget: Joi.number().required(),
  preferredClimate: Joi.string().valid('cold', 'hot', 'moderate').required(),
  travelHistory: Joi.array().items(Joi.string()),
  tripDuration: Joi.number().required(),
});

module.exports = userValidationSchema;
