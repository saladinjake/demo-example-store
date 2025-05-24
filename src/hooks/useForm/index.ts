import { useState, useEffect, useCallback } from "react";

function useForm(props) {
  const {
    initialValues = {},
    validations,
    onSubmit,
    withFocus = true /*turns on or off the blocker functionality*/,
  } = props;
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const stringifiedInitialvalues = JSON.stringify(initialValues);
  //###################
  const truncateObj = (vals) => {
    return Object.fromEntries(
      Object.entries(vals).filter(
        ([key]) => vals[key]?.toString() != "false",
        // Turned off strict checks
        /*&&
          vals[key] != null &&
          vals[key] != undefined,*/
      ),
    );
  };

  //##################
  useEffect(() => {
    setValues(initialValues);
  }, [stringifiedInitialvalues]);
  //removed validation function call from dependency list
  useEffect(() => {
    setErrors(validations(values));
  }, [values]);
  
  const isInvalidCallBack = (errors) => {
    if (Object.values(errors).length) {
      return true;
    }
    return false;
  };
  const isInvalid = useCallback((errors) => isInvalidCallBack(errors), []);
  const setFieldValue = (name: string, value: string) => {
    setTouched((touched) => {
      return { ...touched, [name]: true };
    });
    setValues((values) => {
      return {
        ...values,
        [name]: value || "",
      };
    });
  };
  
  const handleChange = ({ target }) => {
    setTouched((touched) => {
      return { ...touched, [target.name]: true };
    });
    setValues((values) => {
      return {
        ...values,
        [target.name]: target.value || "",
      };
    });  
  };

  const handleSubmit = (event?: any) => {
    event && event?.preventDefault();
    onSubmit(values);
  };

  const resetForm = (initialValues = {}) => {
    setTouched({});
    setErrors({});
    setValues(initialValues);
  };
  
  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    invalid: isInvalid(errors),
    resetForm,
    setErrors,
    setFieldValue,
  };
}
export const hasError = (name, touched, errors) => {
  if (touched[name] && errors[name]) return errors[name];
};
export default useForm;
