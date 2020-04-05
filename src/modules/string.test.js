import assert from 'assert';
import { upper, lower } from './string';

describe('upper()', () => {
    const expectedError = new Error('String param is required, pass a string');

    it('returns error if no string passed', () => {
        assert.throws(() => {
            upper();
        }, expectedError);
    });

    it('returns error if empty string passed', () => {
        assert.throws(() => {
            upper([]);
        }, expectedError);
    });

    it('returns upper case string', () => {
        const sourceString = 'Hello, wORld';
        const resultString = 'HELLO, WORLD';
        assert.equal(upper(sourceString), resultString);
    });

    it('returns string with every 3 char upper case', () => {
        const sourceString = 'helloworld';
        const resultString = 'heLloWorLd';
        assert.equal(upper(sourceString, 3), resultString);
    });
});

describe('lower()', () => {
    const expectedError = new Error('String param is required, pass a string');

    it('returns error if no string passed', () => {
        assert.throws(() => {
            lower();
        }, expectedError);
    });

    it('returns error if empty string passed', () => {
        assert.throws(() => {
            lower([]);
        }, expectedError);
    });

    it('returns upper case string', () => {
        const sourceString = 'Hello, wORld';
        const resultString = 'hello, world';
        assert.equal(lower(sourceString), resultString);
    });

    it('returns string with every 2 char lower case', () => {
        const sourceString = 'Hello, wORld';
        const resultString = 'Hello, wOrld';
        assert.equal(lower(sourceString, 2), resultString);
    });
});