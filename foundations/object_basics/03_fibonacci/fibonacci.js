const fibonacci = function(index) {
    if (isNaN(index) || index <= 0) {
        return 'OOPS';
    } else {
        let num1 = 0;
        let num2 = 1;
        let temp = 0;
        for (let i = 1; i < index-1; i++) {
            temp = num2;
            num2 += num1;
            num1 = temp;
        }
        return num2
    }
};

// Do not edit below this line
module.exports = fibonacci;
