
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let hhh = 0;
  while (hhh[hhh.length - 1] === 0) {
    reverse(hhh);
  }
if(x > (Math.pow(2,31)-1) ){
    return 0
  }
  const b = x.toString().split("");
    if (parseInt(b.reverse().join("")) >= Math.pow(2, 31) + 1 || parseInt(b.reverse().join("")) < -Math.pow(2, 31)) {
    return 0;
  }
  if (b.length === 1) {
    return x;
  }
  if (b[0] !== "-" && b[b.length - 1] !== "0") {
    hhh = parseInt(b.reverse().join(""));

    return hhh;
  }
  if (b[0] !== "-" && b[b.length - 1] === "0") {
    const f = b.reverse();
    f.shift();
    hhh = parseInt(f.join(""));

    return hhh;
  }
  if (b[0] === "-" && b[b.length - 1] !== "0") {
    const ff = [...b];
    ff.shift();

    ff.reverse();
    hhh = parseInt([b[0], ...ff].join(""));
    //console.log(hhh);

    return hhh;
  }
  if (b[0] == "-" && b[b.length - 1] == "0") {
    const k = b[0];
    const j = [...b];
    const ff = [...j];
    
    while (ff[ff.length - 1] == 0) {
      ff.pop();//
    }
    ff.shift();
    ff.reverse();

    hhh = parseInt([k, ...ff].join(""));

    return hhh;
  }
};