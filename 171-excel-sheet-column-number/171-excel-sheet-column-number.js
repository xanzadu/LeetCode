/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const n = columnTitle.length;
    let acc = 0;
    for (var i = 0; i < n; i ++ ) {
        let val = (columnTitle.charCodeAt(i) - 64) * 26 ** (n-1-i);
        acc += val;
    }
    return acc;
};