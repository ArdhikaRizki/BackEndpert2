import Joi from "joi";

export const createAdminSchema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    name: Joi.string().min(3).max(100).required(),
});

export const updateAdminSchema = Joi.object({
    username: Joi.string().min(3).max(50),
    password: Joi.string().min(6),
    email: Joi.string().email(),
    name: Joi.string().min(3).max(100),
});

