/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // base cases
  if (p === '') {
    return s === '';
  }
  if (p.length === 1 || p[1] !== '*') {
    if (s === '' || (s[0] !== p[0] && p[0] !== '.')) {
      return false;
    }
    return isMatch(s.slice(1), p.slice(1));
  }
  while (s !== '' && (s[0] === p[0] || p[0] === '.')) {
    if (isMatch(s, p.slice(2))) {
      return true;
    }
    s = s.slice(1);
  }
  return isMatch(s, p.slice(2));
}
 