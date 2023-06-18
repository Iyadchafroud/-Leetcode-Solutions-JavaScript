/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
  let tankpoessible = (mainTank ) / 4 ;
    if(tankpoessible%1===0){
        tankpoessible-=1
    }
 console.log(tankpoessible);
  
  if(mainTank<5){
      return mainTank*10
  }
  if(mainTank==5){
      return 60
  }
 else if(tankpoessible<=additionalTank){
     
      return  (mainTank +Math.floor(tankpoessible))*10
 }
   else if(tankpoessible>=additionalTank){
     
      return  (mainTank +Math.floor(additionalTank))*10
 }

 
};