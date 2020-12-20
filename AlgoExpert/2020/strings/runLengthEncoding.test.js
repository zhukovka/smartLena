const runLengthEncoding = require('./runLengthEncoding');
const assert = require('assert');
describe('runLengthEncoding Tests', () => {
    it('should return 9A4A2B4C2D', () => {
        const string = 'AAAAAAAAAAAAABBCCCCDD';
        const expected = '9A4A2B4C2D';
        const actual = runLengthEncoding(string);
        assert.deepStrictEqual(actual, expected);
    });
});
