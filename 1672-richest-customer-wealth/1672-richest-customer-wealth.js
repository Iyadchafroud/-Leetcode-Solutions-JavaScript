/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
      let Output = 0;


    for (let index = 0; index < accounts.length; index++) {
   let b= accounts[index].reduce( (accumulator, currentValue) => accumulator + currentValue,
   0)
   if (b>Output) {
    Output=b
   }
    }
    return Output
};