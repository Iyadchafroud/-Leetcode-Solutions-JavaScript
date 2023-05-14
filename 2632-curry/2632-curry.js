/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    return function curried(...arg) {
        if(fn.length>arg.length){
            return function(...anotherarg){
                return curried(...arg,...anotherarg)
            }
        }
          else{ return fn(...arg)} 
        }

    
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
