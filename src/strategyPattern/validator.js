export default class Validator {
  selectValidator(validator) {
    this.validator = validator;
    return this;
  }

  validate(value) {
    if (this.validator) {
      return this.validator.validate(value);
    }
    throw Object.assign(new Error("No validator selected"), { code: "validatorError" });
  }
}
