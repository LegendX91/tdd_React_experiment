import { add, sub, mul, div, mkArray } from "../calculator";

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });
  it("should return 5 for add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("test subtract function", () => {
  it("should return 10 for sub(15, 5)", () => {
    expect(sub(15, 5)).toBe(10);
  });
  it("should return -10 for sub(20, 30)", () => {
    expect(sub(20, 30)).toBe(-10);
  });
});

describe("test multiply function", () => {
  it("should return 45 for mul(5, 9)", () => {
    expect(mul(5, 9)).toBe(45);
  });
  it("should return 90 for mul(9, 10)", () => {
    expect(mul(9, 10)).toBe(90);
  });
  it("should return 0 for mul(1465678, 0)", () => {
    expect(mul(1465678, 0)).toBe(0);
  });
});

describe("test division function", () => {
  it("should return 10 for div(100, 10)", () => {
    expect(div(100, 10)).toBe(10);
  });
  it("should return string 'Impossible' for div(31, 0)", () => {
    expect(div(31, 0)).toBe("Impossible");
  });
  it("should return 0 for div(0, 12)", () => {
    expect(div(0, 12)).toBe(0);
  });
});

describe("test creation of an array with n random numbers, ascending ordered, where each number is double the predecessor", () => {
  it("should return an array of 2 elements for mkArray(2)", () => {
    expect(mkArray(2).length).toBe(2);
  });
  it("should return an array of 18 elements for mkArray(18)", () => {
    expect(mkArray(18).length).toBe(18);
  });
  it("should return an array of n numbers ascending ordered", () => {
    const arrayTest1 = mkArray(10);
    let orderFlag = true;
    for (let i = 0; i < arrayTest1.length; i++) {
      if (i === arrayTest1.length - 1) {
      } else;
      if (arrayTest1[i] > arrayTest1[i + 1]) {
        orderFlag = false;
      }
    }
    expect(orderFlag).toBeTruthy();
  });
  it("should return an array of n number ascending ordered, greater than 0", () => {
    const arrayTest2 = mkArray(10);
    let greaterThanFlag = true;
    if (typeof arrayTest2 !== "string")
      arrayTest2.map((el) => {
        if (el < 0) greaterThanFlag = false;
      });
    expect(greaterThanFlag).toBe(true);
  });
  it("should return an array of n number ascending ordered, greater than 0, v2", () => {
    const arrayTest3 = mkArray(25);
    let greaterThanFlag = true;
    if (typeof arrayTest3 !== "string") {
      arrayTest3.push(-1);
      arrayTest3.map((el) => {
        if (el < 0) greaterThanFlag = false;
      });
    }
    expect(greaterThanFlag).toBe(false);
  });
  it("should return an array of n number ascending ordered, greater than 0, where each number is double the predecessor", () => {
    const arrayTest4 = mkArray(10);
    let isDoubleFlag = true;
    if (typeof arrayTest4 !== "string")
      for (let i = 0; i < arrayTest4.length; i++) {
        if (i === arrayTest4.length - 1) {
        } else if (arrayTest4[i + 1] / 2 !== arrayTest4[i]) {
          isDoubleFlag = false;
        }
      }
    expect(isDoubleFlag).toBe(true);
  });
});
