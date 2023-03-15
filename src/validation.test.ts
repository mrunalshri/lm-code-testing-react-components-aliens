import validations from "./validation";

describe("validateSpeciesName - Must be between 3 and 23 characters. No numbers or special characters allowed!", () => {
  test("it should return false if validation failed for number", () => {
    const input = "11";
    const result = validations.validateSpeciesName(input);
    expect(result).toBe(false);
  });
  test("it should return true if validation passed for special character", () => {
    const input = "testing$";
    const result = validations.validateSpeciesName(input);
    expect(result).toBe(false);
  });
  test("it should return true if validation passed", () => {
    const input = "testing";
    const result = validations.validateSpeciesName(input);
    expect(result).toBe(true);
  });
});

describe("validatePlanetName - Must be between 2 and 49 characters. Numbers are allowed, but no special characters", () => {
  test("it should return false if validation failed for min length", () => {
    const input = "1";
    const result = validations.validatePlanetName(input);
    expect(result).toBe(false);
  });
  test("it should return true if validation passed for special character", () => {
    const input = "testing$";
    const result = validations.validatePlanetName(input);
    expect(result).toBe(false);
  });
  test("it should return true if validation passed", () => {
    const input = "testing";
    const result = validations.validatePlanetName(input);
    expect(result).toBe(true);
  });
});
describe("validateNumberOfBeings - Numbers ONLY. Must be at least 1,000,000,000.", () => {
  test("it should return false if validation failed for number", () => {
    const input = "1000";
    const result = validations.validateNumberOfBeings(input);
    expect(result).toBe(false);
  });
  test("it should return false if validation failed for character", () => {
    const input = "test";
    const result = validations.validateNumberOfBeings(input);
    expect(result).toBe(false);
  });

  test("it should return true if validation passed", () => {
    const input = "1000000000";
    const result = validations.validateNumberOfBeings(input);
    expect(result).toBe(true);
  });
});
describe("validateQuestion - '4' must be selected. Selecting 'Not 4' should display an error.", () => {
  test("it should return false if validation failed for Not 4", () => {
    const input = "Not 4";
    const result = validations.validateQuestion(input);
    expect(result).toBe(false);
  });

  test("it should return true if validation passed", () => {
    const input = "4";
    const result = validations.validateQuestion(input);
    expect(result).toBe(true);
  });
});
describe("validateReasonText - Must be between 17 and 153 characters.", () => {
  test("it should return false if validation failed", () => {
    const input = "Not 4";
    const result = validations.validateReasonText(input);
    expect(result).toBe(false);
  });

  test("it should return true if validation passed", () => {
    const input = "this is testing textarea";
    const result = validations.validateReasonText(input);
    expect(result).toBe(true);
  });
});
