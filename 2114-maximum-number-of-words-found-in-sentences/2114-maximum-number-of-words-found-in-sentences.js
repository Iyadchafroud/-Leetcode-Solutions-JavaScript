/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
     let max =0;
 for (let index = 0; index < sentences.length; index++) {
     let leng=sentences[index].split(' ').length
if(leng> max) max=leng
 }
 return max
};
