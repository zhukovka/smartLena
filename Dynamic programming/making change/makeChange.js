const makeChange = (n, bills) => {
    console.log(n, bills)
    if (n < 0) {
        return 0; // no way of paying negative amounts
        
    } else if (n == 0) {
        return 1; // one single way of paying $0: with no bills
        
    } else if (bills.length == 0) {
        // here, n>0
        return 0; // no bills? no way of paying
        
    } else {
        return makeChange(n, bills.slice(1)) + makeChange(n - bills[0], bills);
    }
};

module.exports = makeChange;
