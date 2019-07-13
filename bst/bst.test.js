const assert = require('assert');
const findClosestValueInBst = require('./closest');
const BST = require('./BST');
const chai = require("chai");

describe('Binary search trees', function () {
    describe('BST construction', function () {
        const test1 = new BST(10).insert(5).insert(15).insert(5).insert(2)
            .insert(14).insert(22);

        const test2 = new BST(10).insert(15).insert(11).insert(22).remove(10);

        const test3 = new BST(10).insert(5).insert(7).insert(2).remove(10);

        const test4 = new BST(10).insert(5).insert(15).insert(22).insert(17)
            .insert(34).insert(7).insert(2).insert(5).insert(1).insert(35).insert(27)
            .insert(16).insert(30).remove(22).remove(17);

        function inOrderTraverse (tree, array) {
            if (tree !== null) {
                inOrderTraverse(tree.left, array);
                array.push(tree.value);
                inOrderTraverse(tree.right, array);
            }
            return array;
        }

        it('Test Case #1', function () {
            chai.expect(test1.left.value).to.deep.equal(5);
        });

        it('Test Case #2', function () {
            chai.expect(test1.right.right.value).to.deep.equal(22);
        });

        it('Test Case #3', function () {
            chai.expect(test1.right.left.value).to.deep.equal(14);
        });

        it('Test Case #4', function () {
            chai.expect(test1.left.right.value).to.deep.equal(5);
        });

        it('Test Case #5', function () {
            chai.expect(test1.left.left.value).to.deep.equal(2);
        });

        it('Test Case #6', function () {
            chai.expect(test1.left.left.left).to.deep.equal(null);
        });

        it('Test Case #7', function () {
            chai.expect(test1.right.left.right).to.deep.equal(null);
        });

        it('Test Case #8', function () {
            chai.expect(test1.contains(15)).to.deep.equal(true);
        });

        it('Test Case #9', function () {
            chai.expect(test1.contains(2)).to.deep.equal(true);
        });

        it('Test Case #10', function () {
            chai.expect(test1.contains(5)).to.deep.equal(true);
        });

        it('Test Case #11', function () {
            chai.expect(test1.contains(10)).to.deep.equal(true);
        });

        it('Test Case #12', function () {
            chai.expect(test1.contains(22)).to.deep.equal(true);
        });

        it('Test Case #13', function () {
            chai.expect(test1.contains(23)).to.deep.equal(false);
        });

        it('Test Case #14', function () {
            chai.expect(inOrderTraverse(test2, [])).to.deep.equal([11, 15, 22]);
        });

        it('Test Case #15', function () {
            chai.expect(inOrderTraverse(test3, [])).to.deep.equal([2, 5, 7]);
        });

        it('Test Case #16', function () {
            chai.expect(inOrderTraverse(test4, [])).to.deep.equal([1, 2, 5, 5, 7, 10, 15, 16, 27, 30, 34, 35]);
        });

        it('Test Case #17', function () {
            chai.expect(test4.right.right.value).to.deep.equal(27);
        });

        it('Test Case #18', function () {
            chai.expect(test4.right.right.left.value).to.deep.equal(16);
        });
    });

    describe('BST find closest', function () {
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