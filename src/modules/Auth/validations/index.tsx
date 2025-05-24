import model from "utils/hooks/useForm/utilities/model";

interface IAuth{
    email: string;
    password:string
}

interface IRegister{
email: string;
    password:string;
    confirmPassword: string;

}
const loginValiations = (values: IAuth) => {
  const errors = {
    ...model("email")(values.name)("isRequired"),
    ...model("password")(values.route)("isRequired|min:2"),
   
  };

  return errors;
};


const registerValiations = (values: IRegister) => {
  const errors = {
    ...model("email")(values.email)("isRequired"),
    ...model("password")(values.password)("isRequired|min:2"),
    ...model("confirmPassword")(values.confirmPassword)("isRequired|min:2"),
   
  };

  return errors;
};


export const validations =   { registerValiations, loginValiations };
