const countTriplets = require('./countTriplets');
const assert = require('assert');

describe('Count Triplets Tests', () => {
    it('should return 2', () => {
        const res = countTriplets([1, 2, 2, 4], 2)
        assert.strictEqual(res, 2);
    });
    
    it('should return 6', () => {
        const res = countTriplets([1, 3, 9, 9, 27, 81], 3)
        assert.strictEqual(res, 6);
    });
    it('should return 4', () => {
        const res = countTriplets([1, 5, 5, 25, 125], 5)
        assert.strictEqual(res, 4);
    });
    // it('should return 0', () => {
    //     const res = countTriplets([1, 5, 5, 55], 5)
    //     assert.strictEqual(res, 0);
    // });
    
    it('should return 0', () => {
        const res = countTriplets([1, 700017524, 19825744, 777459894, 735573643, 178930800, 381654999, 429832527, 180098534, 927622329, 16298209, 825911952, 507288526, 317338746, 888990172, 560552183, 429755564, 976069902, 240301877, 791130043, 947340732, 134328643, 400900451, 741150090, 213632881, 803543377, 231990946, 999970945, 950575872, 43108758, 207080820, 785652192, 595642633, 226906563, 415628437, 183732627, 405837362, 797283435, 466081505, 438452247, 577422115, 482379713, 116880550, 84710640, 799718459, 5870722, 645262822, 229474022, 834456975, 885564698, 20604064, 634314058, 872409692, 274020867, 227980499, 938558924, 930080595, 459971445, 938529868, 880656466, 355596554, 145610687, 518825009, 803755538, 225033602, 934453445, 987488164, 483387315, 584253231, 306086020, 921839562, 161675345, 788465732, 38720111, 98902336, 588184190, 897107184, 744165157, 670174564, 731564158, 482246206, 543294979, 218394567, 207172249, 817315845, 446375066, 145731172, 599912791, 906346510, 936777392, 333085609, 114459415, 934904430, 851910617, 918214952, 12454383, 638880414, 758219467, 495841698, 75649996, 64305486, 270197611, 237325341, 705287569, 308917721, 336227676, 145988111, 58541257, 932909185, 816162674, 790105414, 267671742, 359457652, 8499981, 474843991, 29289849, 307391398, 473091514, 629202639, 66254259, 262385257, 962288247, 180713673, 49806039, 666715216, 951444976, 62260421, 158111981], 2)
        assert.strictEqual(res, 0);
    });
    
    it('should return 0 p1', () => {
        const res = countTriplets([227980499, 938558924, 930080595, 459971445, 938529868, 880656466, 355596554, 145610687, 518825009, 803755538, 225033602, 934453445, 987488164, 483387315, 584253231, 306086020, 921839562, 161675345, 788465732, 38720111, 98902336, 588184190, 897107184, 744165157, 670174564, 731564158, 482246206, 543294979, 218394567, 207172249, 817315845, 446375066, 145731172, 599912791, 906346510, 936777392, 333085609, 114459415, 934904430, 851910617, 918214952, 12454383, 638880414, 758219467, 495841698, 75649996, 64305486, 270197611, 237325341, 70528], 2)
        assert.strictEqual(res, 0);
    });
    
    it('should return 3', () => {
        const res = countTriplets([1, 2, 1, 2, 4], 2)
        //{1: [0,2],
        // 2: [1,3],
        // 4: [4]}
        //1,2,4 (0,1,4)
        //1,2,4 (0,3,4)
        //1,2,4 (2,3,4)
        assert.strictEqual(res, 3);
    });
    
    it('should return 6 for [1, 2, 2, 4, 4, 4]', () => {
        const res = countTriplets([1, 2, 2, 4, 4, 4], 2)
        //{1: [0],
        // 2: [1,2],
        // 4: [3, 4, 5]}
        //1,2,4 (0,1,3)
        //1,2,4 (0,2,3)
        //1,2,4 (0,1,4)
        //1,2,4 (0,2,4)
        //1,2,4 (0,1,5)
        //1,2,4 (0,2,5)
        assert.strictEqual(res, 6);
    });
    
    it('should return 1', () => {
        const res = countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)
        // {1: [0,1,2] }
        assert.strictEqual(res, 161700);
    });
});
