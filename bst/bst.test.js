const assert = require('assert');
const findClosestValueInBst = require('./closest');
const BST = require('./BST');

describe('Binary search trees', function () {
    describe('BST construction', function () {
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
        }
    );

    describe('inorder tree walk', function () {
        const tree = new BST(6).insert(5).insert(7).insert(2).insert(5).insert(8);
        it('should walk a tree', function () {
            const ordered = [];
            tree.inorder(ordered);
            console.log(ordered);
            assert.deepStrictEqual(ordered, [2, 5, 5, 6, 7, 8]);
        });
    });

    describe('search', function () {
        const tree = BST.fromArray([6, 5, 7, 2, 5, 8]);
        it('should find a value in a tree', function () {
            const actual = tree.search(8);
            assert.deepStrictEqual(actual.value, 8);
        });

        it('should not find a value in a tree', function () {
            const actual = tree.search(42);
            assert.deepStrictEqual(actual, null);
        });

        it('should find min in a tree', function () {
            const min = tree.min();
            assert.deepStrictEqual(min.value, 2);
        });

        it('should find max in a tree', function () {
            const max = tree.max();
            assert.deepStrictEqual(max.value, 8);
        });

    })

    describe('successor and predecessor', function () {
        const tree = BST.fromArray([15, 6, 18, 3, 7, 17, 20, 2, 4, 13, 9]);
        it('should find a successor of the root', function () {
            const successor = tree.successor();
            assert.deepStrictEqual(successor.value, 17);
        });
        it('should find a successor of internal', function () {
            const internal = tree.search(13);
            const successor = internal.successor();
            assert.deepStrictEqual(successor.value, 15);
        });
        it('should find a predecessor', function () {

        });
    })
});