const lowerCaseRegex = /[a-z]/;
const upperCaseRegex = /[A-Z]/;
const numberRegex = /\d/;
const lengthRegex = /[0-9a-zA-Z!@#$%^&*]{8,}/;
const specialCharRegex = /^(?=.*[!@#$%^&*]).*$/;

const PASSWORD_SUGGESTION_DESCRIPTION = [
  {
    label: 'Minimum 8 characters',
    regex: lengthRegex
  },
  {
    label: 'Contain one or more uppercase characters',
    regex: upperCaseRegex
  },
  {
    label: 'Contain one or more lowercase characters',
    regex: lowerCaseRegex
  },
  {
    label: 'Contain one or more numbers',
    regex: numberRegex
  },
  {
    label: 'Contain one or more of the following special characters (!@#$%^&*)',
    regex: specialCharRegex
  }
];

export { lowerCaseRegex, upperCaseRegex, numberRegex, specialCharRegex, PASSWORD_SUGGESTION_DESCRIPTION };
