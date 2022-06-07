const repeatString = function(word, num) {
    let string = '';
    if (num > 0) {
        for (let i = num; i < num; i++) {
            string += word;
        }
    }
    else {
        return 'Error';
    }
};

// Do not edit below this line
module.exports = repeatString;
