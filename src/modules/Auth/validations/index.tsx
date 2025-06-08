import model from "../../../hooks/useForm/utilities/model";

interface IAuth{
    email: string;
    password:string
}

interface IRegister{
email: string;
    password:string;
    confirmPassword: string;

}
const loginValidations = (values: IAuth) => {
  const errors = {
    ...model("email")(values.email)("isRequired|isEmail"),
    ...model("password")(values.password)("isRequired|min:2"),
   
  };

  return errors;
};


const registerValidations = (values: IRegister) => {
  const errors = {
    ...model("email")(values.email)("isRequired|isEmail"),
    ...model("password")(values.password)("isRequired|min:2"),
    ...model("confirmPassword")(values.confirmPassword)("isRequired|min:2"),
   
  };

  return errors;
};


export   { registerValidations, loginValidations };
