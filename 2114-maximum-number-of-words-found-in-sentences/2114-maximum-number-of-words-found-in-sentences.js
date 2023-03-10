/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
     let max =0;
 for (let index = 0; index < sentences.length; index++) {
if(sentences[index].split(' ').length> max) max=sentences[index].split(' ').length
 }
 return max
};
