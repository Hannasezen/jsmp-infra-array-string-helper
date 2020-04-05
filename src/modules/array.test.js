import assert from 'assert';
import { filterByType } from './array';

describe('filterByType()', () => {
    const expectedError = new Error('Array is required argument. Pass an array.');

    it('returns error if no array passed', () => {
        assert.throws(() => {
            filterByType();
        }, expectedError);
    });

    it('returns error if empty array passed', () => {
        assert.throws(() => {
            filterByType([]);
        }, expectedError);
    });

    it('returns array of strings', () => {
        const sourceArray = [12, NaN, null, [['string'], {}]];
        const resultArray = ['string'];
        assert.deepEqual(filterByType(sourceArray), resultArray);
    });

    it('returns array of numbers', () => {
        const sourceArray = [12, NaN, null, 'string', {}];
        const resultArray = [12];
        assert.deepEqual(filterByType(sourceArray, 'Number'), resultArray);
    });

});