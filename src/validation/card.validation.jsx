import Joi from "joi-browser";

const cardsSchema = Joi.object({
  biz_Name: Joi.string().min(2).max(255).required(),
  biz_Description: Joi.string().min(2).max(1024).required(),
  biz_Address: Joi.string().min(2).max(500).required(),
  biz_Phone: Joi.string().min(9).max(11).required(),
});

export default cardsSchema;
