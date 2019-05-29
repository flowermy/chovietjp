import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { convertMessageByCode } from '../../common/function_common/functionCommon';

export default function validateInput(data) {
  const errorsValidate = {};

  if (Validator.isEmpty(data.username)) {
    errorsValidate.username = convertMessageByCode('THIS_FIELD_IS_REQUIRED');
  }

  if (Validator.isEmpty(data.password)) {
    errorsValidate.password = convertMessageByCode('THIS_FIELD_IS_REQUIRED');
  }

  return {
    errorsValidate,
    isValid: isEmpty(errorsValidate),
  };
}
