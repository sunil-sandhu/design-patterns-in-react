export function telValidator() {
  return {
    validate: (value) => {
      return /^[0-9]{11}$/g.test(value);
    }
  };
}
