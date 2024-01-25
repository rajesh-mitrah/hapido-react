import { lowerCaseRegex, upperCaseRegex, numberRegex, specialCharRegex } from 'constants/signup';

export const passwordValidator = value => {
  const lengthScore = value.length;
  const complexityScore =
    lowerCaseRegex.test(value) +
    upperCaseRegex.test(value) +
    numberRegex.test(value) +
    specialCharRegex.test(value) +
    (lengthScore >= 8 ? 1 : 0);

  const complexityPercentage = lengthScore > 0 ? (complexityScore / 5) * 100 : 0;

  let status = {
    progressType: '',
    color: '',
    percent: complexityPercentage,
    value
  };
  if (complexityScore <= 2) {
    status = {
      ...status,
      progressType: 'Weak',
      color: '#ff4d4f'
    };
  } else if (complexityScore <= 4) {
    status = {
      ...status,
      progressType: 'Medium',
      color: '#e89b1e'
    };
  } else if (complexityScore === 5) {
    status = {
      ...status,
      progressType: 'Strong',
      color: '#1ee880'
    };
  }
  return status;
};
