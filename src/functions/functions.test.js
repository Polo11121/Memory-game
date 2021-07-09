import { getRandomNumber } from "./functions";

describe("functions.js", () => {
  it("should getRandomNumber() return number beetwen 0 and 70", () => {
    const value = getRandomNumber();
    const inRange = value < 80 && value >= 0;

    expect(Boolean(value)).toBe(inRange);
  });
  it("should getRandomNumber() return Integer", () => {
    const value = Number.isInteger(getRandomNumber());

    expect(value).toBe(true);
  });
});
