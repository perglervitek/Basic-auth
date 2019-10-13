const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = (data) => {
    const validationSchema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(6).required()
    });

    return  validationSchema.validate(data);
}

//Login Validation
const loginValidation = (data) => {
    const validationSchema = Joi.object({
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(6).required()
    });
    return  validationSchema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
