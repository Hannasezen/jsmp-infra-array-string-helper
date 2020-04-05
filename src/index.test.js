import assert from 'assert';
import jsmp from './index';

describe('Functions are imported from source files', () => {
    it('All imported are functions', () => {
        for (let func in jsmp) {
            assert.equal(typeof jsmp[func], 'function');
        }
    });
});