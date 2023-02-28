/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const seen = new Set();
  
  while (n !== 1) {
    const digits = n.toString().split('');
    const sumOfSquares = digits.reduce((acc, digit) => acc + digit ** 2, 0);
    
    if (seen.has(sumOfSquares)) {
      return false;
    }
    
    seen.add(sumOfSquares);
    n = sumOfSquares;
  }
  
  return true;
}

  