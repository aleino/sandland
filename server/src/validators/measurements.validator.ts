import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";

const measurementsValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.array().items(
    Joi.object({
      city: Joi.string().required(),
      lat: Joi.number().required().min(-90).max(90).allow(null),
      lon: Joi.number().required().min(-180).max(180).allow(null),
      temperature: Joi.number().required().min(-273.15).max(99).allow(null),
    })
  );

  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(error.details);
  }
  req.body = value;
  next();
};

export default measurementsValidation;
