import { exponential, factorial, tartaglia, taylor } from "../problems";


// Factorial Function
describe("Testing of factorial function", () => {
  it("should calculate the factorial of 3", () => {
    expect(factorial(3)).toBe(6);
  });
  it("should calculate the factorial of 10", () => {
    expect(factorial(10)).toBe(10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1);
  });
  it("should work also with 0 as a value", () => {
    expect(factorial(0)).toBe(1);
  });
  it("should NOT work with negative numbers", () => {
      // () => {} per non invocare e mandare in errore prima del controllo la funzione.
    expect(() => factorial(-3)).toThrow(TypeError);
  });
});


// Exponential Function
describe("Testing of exponential function", () => {
    it("should calculate the exponential value of 3 ^ 6", () => {
        expect(exponential(3, 6)).toBe(Math.pow(3, 6));
    });
    it("should calculate the exponential value of a number elevated to 0", () => {
        expect(exponential(120, 0)).toBe(1);
    });
    it("should work with numbers regardless of sign", () => {
        expect(exponential(-47, 4)).toBe(Math.pow(-47, 4));
    });
});

// Taylor Function. Usage of Exponential and Factorial functions
describe("Testing of Taylor function", () => {
    it("should correctly calculate the value of a Taylor series given 1 with 2 iterations", () => {
        expect(taylor(1, 2)).toBe(2.5);
    });
    it("should correctly calculate the value of a Taylor series given 1 with 2 iterations, v2", () => {
        expect(taylor(9, 4)).toBe(445.375);
    });
    it("should throw error if the number of iteration is negative", () => {
        expect(() => taylor(-32,-32)).toThrow(Error);
    });
})

describe("Testing of Tartaglia function", () => {
    it("should correctly calculate a triangle of Tartaglia with a value of 2", () => {
        expect(tartaglia(2)).toEqual([[1], [1, 1], [1,2,1]]);
    });
    it("should correctly calculate a triangle of Tartaglia with a value of 4", () => {
        expect(tartaglia(4)).toEqual([[1], [1, 1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]);
    });
    it("should throw an error if number of iteration given is negative or zero", () => {
        expect(() => tartaglia(-23)).toThrow(Error);
    });
})


