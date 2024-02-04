/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
const obj={}
    for (str of strs){
        
       let key= str.split('').sort().join('')
       
    obj[key] ?obj[key].push(str):obj[key] =[str]
       
    }
        return Object.values(obj);

};