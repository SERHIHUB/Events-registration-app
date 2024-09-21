import Joi from 'joi';

const objectSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  birth: Joi.string(),
  userFoundOut: Joi.string(),
});

export const updateEventSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  date: Joi.string(),
  organizer: Joi.string(),
  participants: Joi.array().items(objectSchema),
});
