/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    result = 0;
    const sArray = s.split('');
    const numArray = sArray.map(char => convertNum(char));
    for (let i = 0; i < numArray.length; i++) {
        let num = numArray[i];
        if (num < numArray[i+1]) {
            result -= num;
        } else {
        result += num;
        }
    };
    return result;
};

const convertNum = (s) => {
    switch (s) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
    }
}
