
function pyramid(s, i) {
    let res = '';
    for (let n = 1; n <= i; n++) {
        for (let k = 0; k < i - n; k++) {
            res += ' '.repeat(s.length);
        }
        for (let d = 0; d < 2 * n - 1; d++) {
            res += s;
        }
        res += '\n';
    }
    return res.slice(0,res.length-1);
}