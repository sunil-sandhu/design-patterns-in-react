export function emailValidator() {
  return {
    validate: (value) => {
      return value.indexOf("@") !== -1;
    }
  };
}
