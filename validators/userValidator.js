import Joi from "joi";

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  age: Joi.number().integer().max(99).required().messages({
    'number.integer': `"age" alani sayi olmak zorunda`,
    'number.max': `"age" 99 dan buyuk olamaz`,
    'any.required': `"age" alani zorunludur`
  })
});

export default userSchema