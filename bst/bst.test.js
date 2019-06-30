const assert = require('assert');
const findClosestValueInBst = require('./closest');
const BST = require('./BST');

describe('Binary search trees', function () {
    const tree = new BST(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
        .insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000)
        .insert(204).insert(205).insert(207).insert(206).insert(208).insert(203)
        .insert(-51).insert(-403).insert(1001).insert(57).insert(60).insert(4500);

    it('should find closest to 100', function () {
        const closest = findClosestValueInBst(tree, 100);

        assert.strictEqual(closest, 100);
    });

    it('should find closest to 208', function () {
        const closest = findClosestValueInBst(tree, 208);

        assert.strictEqual(closest, 208);
    });

    it('should find closest to 29749', function () {
        const closest = findClosestValueInBst(tree, 29749);

        assert.strictEqual(closest, 4500);
    });

    it('should find closest to 30000', function () {
        const closest = findClosestValueInBst(tree, 30000);

        assert.strictEqual(closest, 55000);
    });

    it('should find closest to -1', function () {
        const closest = findClosestValueInBst(tree, -1);

        assert.strictEqual(closest, 1);
    });
});