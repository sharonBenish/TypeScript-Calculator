import { describe, expect, test } from '@jest/globals';
const calculate = require("./calculate");
describe('calculate test', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calculate(1, 2, '+')).toBe(3);
    });
    test('subtracts 1 - 2 to equal -1', () => {
        expect(calculate(1, 2, '-')).toBe(-1);
    });
    test('multiplies 1 x 2 to equal 2', () => {
        expect(calculate(1, 2, 'x')).toBe(2);
    });
    test('divides 1 / 2 to equal 0.5', () => {
        expect(calculate(1, 2, '/')).toBe(0.5);
    });
});
