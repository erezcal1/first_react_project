import Joi from "joi-browser";

const registerTkSchema = Joi.isObject({
  name: Joi.string().min(2).max(255).required(),
  email: Joi.string().min(6).max(64).required().email(),
  password: Joi.string().min(6).max(255).required(),
  biz: Joi.boolean().required(),
});
export default registerTkSchema;
