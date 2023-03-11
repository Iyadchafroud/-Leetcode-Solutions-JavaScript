/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
     let output=0;
  for (let index = 0; index < stones.length; index++) {

    for (let i = 0; i < jewels.length;  i++) {

      if( stones[index]==jewels[i]) output+=1
      
    }
  }
  return output  
};