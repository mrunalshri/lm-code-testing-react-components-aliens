const validateSpeciesName = (value: string): boolean => {
  const regex = /^[a-zA-Z]{3,23}$/;
  return regex.test(value);
};

const validatePlanetName = (value: string): boolean => {
  const regex = /^[a-zA-Z0-9]{2,49}$/;
  return regex.test(value);
};
const validateNumberOfBeings = (value: string): boolean => {
  if (isNaN(parseInt(value))) {
    return false;
  }
  return parseInt(value) >= 1000000000;
};
const validateQuestion = (value: string): boolean => {
  return parseInt(value) === 4;
};
const validateReasonText = (value: string): boolean => {
  const regex = /^.{17,153}$/;
  return regex.test(value);
};

const validations = {
  validateSpeciesName,
  validateNumberOfBeings,
  validatePlanetName,
  validateQuestion,
  validateReasonText,
};

export default validations;
