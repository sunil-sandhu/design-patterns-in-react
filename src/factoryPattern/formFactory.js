import { FormContact } from "./contact";
import { FormRegister } from "./register";

export const FormFactory = (type, attributes) => {
  const formTypes = {
    contact: FormContact(attributes),
    register: FormRegister(attributes)
  };
  const FormType = () => formTypes[type];
  return FormType(attributes);
};
