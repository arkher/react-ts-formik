import { cpf } from 'cpf-cnpj-validator';
import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Por favor, digite o nome completo.'),
  grossIncome: Yup.string().required(
    'Por favor, digite o valor da sua renda mensal.'
  ),
  email: Yup.string()
    .email('Por favor, digite um email válido.')
    .required('Por favor, digite um email válido.'),
  cpf: Yup.string()
    .required('Por favor, digite um cpf válido.')
    .test('is-valid-cpf', 'cpf inválido', (value) => cpf.isValid(value)),
  postalCode: Yup.string()
    .required('Por favor, digite um cep válido.')
    .test('is-valid-postalcode', 'CEP inválido', (value) =>
      /^[0-9]{5}-[0-9]{3}$/.test(value)
    ),
  birthDay: Yup.date().required('Por favor, digite uma data válida.'),
  professionalClassId: Yup.string().required('Por favor, selecione uma opção.'),
  osVersion: Yup.string().required('Por favor, selecione uma opção.'),
  deviceBrand: Yup.string().required('Por favor, selecione uma opção.'),
  deviceModel: Yup.string().required('Por favor, selecione uma opção.'),

  cellPhone: Yup.string()
    .required('Por favor, digite um número válido.')
    .test('is-valid-cellPhone', 'Número inválido', (value) =>
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:\d\d|[2-9])\d{3})\-?(\d{4}))$/.test(
        value
      )
    ),
  terms: Yup.boolean()
    .test('is-accepted-terms', 'Campo obrigatório', (value) => value === true)
    .required('Campo obrigatório.'),
  nonPoliticallyExposedPerson: Yup.boolean()
    .test('is-accepted-terms', 'Campo obrigatório', (value) => value === true)
    .required('Campo obrigatório.'),
});
