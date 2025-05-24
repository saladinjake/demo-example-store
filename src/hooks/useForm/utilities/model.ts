
export const titleCase = (str) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(" ");
};

const sentenceCase = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ");
const errorDetail = (str) => titleCase(sentenceCase(str));
const model =
  (key: string) =>
  (value: string | Date | Array<string> | number) =>
  (rules: string) => {
    let errors = {};
    for (const rule of rules.split("|")) {
      if (rule === "isRequired") {
        if (Array.isArray(value) && !value.length) {
          errors = { ...errors, [key]: `${errorDetail(key)} is required!` };
          return errors;
        }

        if (!value && value !== 0) {
          errors = { ...errors, [key]: `${errorDetail(key)}  is required!` };
          return errors;
        }
      }
      if (rule === "isEmail") {
        const regex =
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!regex.test(value?.toString())) {
          errors = { ...errors, [key]: `${errorDetail(key)} is not valid!` };
          return errors;
        }
      }

      if (rule === "isURL") {
        const regex =
          /\b(?:https?:\/\/)?(?:www\.)?[-A-Z0-9+&@#/%?=~_|!:,.;]*[A-Z0-9+&@#/%=~_|]\b$/i;
        if (!regex.test(value?.toString())) {
          errors = {
            ...errors,
            [key]: `${errorDetail(key)} is not a valid URL!`,
          };
          return errors;
        }
      }

      if (rule === "isDigit") {
        const regex = /^\d+(\.\d)?\d*$/i;
        if (!regex.test(value?.toString())) {
          errors = {
            ...errors,
            [key]: `${errorDetail(key)} should only be whole numbers or with decimals!`,
          };
          return errors;
        }
      }

      if (rule === "isNameField") {
        const regex = /^[a-zA-Z ]+$/;
        if (!regex.test(value?.toString())) {
          errors = {
            ...errors,
            [key]: `${errorDetail(key)} should only be a name or full name`,
          };
          return errors;
        }
      }

      if (rule === "isGreaterThanZero") {
        if (parseInt(value?.toString()) <= 0) {
          errors = {
            ...errors,
            [key]: `${errorDetail(key)} should only be whole numbers or with decimals greater than zero!`,
          };
          return errors;
        }
      }

      if (rule === "isNumber") {
        const regex = /^\d+$/i;
        if (!regex.test(value?.toString())) {
          errors = {
            ...errors,
            [key]: `${errorDetail(key)} should only be whole numbers!`,
          };
          return errors;
        }
      }

      if (rule == "isPhoneNumber") {
        const intlPhoneNumber =
          /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,9}$/;

        if (
          !intlPhoneNumber.test(value?.toString()) ||
          value?.toString()?.length > 14
        ) {
          errors = {
            ...errors,
            [key]: `${errorDetail(key)} should only be a valid phone number with country code!`,
          };
          return errors;
        }
      }

      if (rule === "isGreaterThanZero") {
        if (typeof value == "string" || typeof value == "number") {
          if (value?.toString() == "0") {
            errors = {
              ...errors,
              [key]: `${errorDetail(key)} should only be whole  greater than zero!`,
            };
            return errors;
          }
        }
      }

      if (rule === "isCurrencyValue") {
        const regex = /^(₦)\d+$/i;
        if (!regex.test(value?.toString())) {
          errors = {
            ...errors,
            [key]: `${errorDetail(key)} should only be an amount value in naira!`,
          };
          return errors;
        }
      }

      if (rule.split(":").length > 1) {
        const [limit, limitValue] = rule.split(":");

        if (limit === "max") {
          if (value?.toString().length > Number(limitValue)) {
            errors = {
              ...errors,
              [key]: `${errorDetail(key)} cannot be greater than ${limitValue} characters`,
            };
            return errors;
          }
        }

        if (limit === "min") {
          if (value?.toString().length < Number(limitValue)) {
            errors = {
              ...errors,
              [key]: `${errorDetail(key)} cannot be less than ${limitValue} characters`,
            };
            return errors;
          }
        }
      }
    }

    return errors;
  };

export default model;
