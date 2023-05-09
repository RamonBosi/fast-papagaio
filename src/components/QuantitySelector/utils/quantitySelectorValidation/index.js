import * as yup from 'yup'

const numberError = 'Quantidade comprada tem que ser um número'
const positiveError = 'Quantidade comprada tem que ser um número positivo'
const integerError = 'Quantidade comprada tem que ser um número inteiro'
const minError = 'Quantidade comprada tem que ser um número com valor minímo de 1'
const requiredError = 'Campo obrigatório'

const quantitySelectorSchema = yup.object().shape({
  quantityPurchased: yup
    .number(numberError)
    .positive(positiveError)
    .integer(integerError)
    .min(1, minError)
    .required(requiredError)
})

export const quantitySelectorValidation = async (data) => {
  let validation = null

  try {
    const validateData = await quantitySelectorSchema.validate(data)

    validation = {
      success: true,
      res: validateData
    }

  } catch (err) {

    validation = {
      success: false,
      res: err.errors[0]
    }
  }

  return validation
}