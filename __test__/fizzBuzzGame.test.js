const app = require('../js/fizzBuzz');

test('will return Fizz if i is device by 3', () => {
    expect(app.FizzBuzzGame(3)).toBe("Fizz");
});


test('will return Buzz if i is device by 5', () => {
    expect(app.FizzBuzzGame(5)).toBe("Buzz");
});


test('will return FizzBuzz if i is device by 15', () => {
    expect(app.FizzBuzzGame(15)).toBe("FizzBuzz");
});


test('will return i if i is not device by 3, 5 or 15', () => {
    expect(app.FizzBuzzGame(2)).toBe(2);
});