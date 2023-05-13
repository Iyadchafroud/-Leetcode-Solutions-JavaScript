/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(int) {
    let init =int
    const increment = function(){
     return  init+=1
         
    }
    const decrement = function(){
        
         
        return init-=1
    }
   const  reset= function(){
       init= int
       
       return init;
    }
   return {increment , decrement,reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */