const assert = require('assert');
describe('Easy algorithms', () => {
    describe('Grading Students', () => {
        const gradingStudents = require('./gradingStudents');
        
        it('should round grades', () => {
            const grades = [73, 67, 38, 33];
            assert.deepStrictEqual(gradingStudents(grades), [75, 67, 40, 33]);
        });
    });
});
