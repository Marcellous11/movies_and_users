 import {body, validationResult } from "express-validator"

 const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

const userValidationRules = () => {
  return [
    body('firstName').notEmpty().withMessage("First name is required"),
    body('lastName').notEmpty().withMessage("Last name is required"),
    body('email').isEmail().withMessage("Email is required"),
    body('username').isLength({min:8}).withMessage("User name must be at least 8 characters long"),
  ]
}
const movieValidationRules = () => {
  return [
    body('title').notEmpty().withMessage("Title is required"),
    body('director').notEmpty().withMessage("Director is required"),
    body('releaseYear').notEmpty().withMessage("A release year is required."),
  ]
}

export {validate,userValidationRules,movieValidationRules}