/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
     if (s1 === "" || s2 === "") {
        return false;
    }
    let chars = new Array(26).fill(-Infinity);
    let start = 0, distinct = 0; // number of distinct chars to collect
    for (let i = 0; i < s1.length; i++) {
        let idx = s1.charCodeAt(i) - 97;
        chars[idx] = chars[idx] === -Infinity ? 1 : chars[idx]+1;
        if (chars[idx] === 1) distinct++;
    }
    for (let end = 0; end < s2.length; end++) {
        let endIdx = s2.charCodeAt(end) - 97;
        if (chars[endIdx] !== -Infinity) {
            chars[endIdx]--;
            if (chars[endIdx] === 0) distinct--;
        }
        while (start <= end && distinct === 0) {
            if (end-start+1 === s1.length) {
                return true;
            }
            let startIdx = s2.charCodeAt(start) - 97;
            if (chars[startIdx] !== -Infinity) {
                chars[startIdx]++;
                if (chars[startIdx] === 1) distinct++;
            }
            start++;
        }
    }
    return false;
};