const fibonacci = function(index) {
    if (isNaN(index) || index < 0 || index !== Number(index)) {
        return 'OOPS';
    } else {
        let num1 = 0;
        let num2 = 1;
        let temp = 0;
        for (let i = 0; i < index; i++) {
            temp = num2;
            num2 += num1;
            num1 = temp;
        }
        return num1
    }
};

// Do not edit below this line
module.exports = fibonacci;
