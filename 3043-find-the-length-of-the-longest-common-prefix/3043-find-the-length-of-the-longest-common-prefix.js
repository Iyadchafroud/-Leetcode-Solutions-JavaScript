/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

 var longestCommonPrefix = function (arr1, arr2) {
    for (i = 0; i < arr1.length; i++)
        arr1[i] = arr1[i].toString();
    for (i = 0; i < arr2.length; i++)
        arr2[i] = arr2[i].toString();

    num = new Set()
    for (i = 0; i < arr2.length; i++) {
        str = "";
        for (j = 0; j < arr2[i].length; j++) {
            str = str.concat(arr2[i][j]);
            num.add(str);
        }
    }
    max = 0;
    for (i = 0; i < arr1.length; i++) {
        str = arr1[i];
        for (j = arr1[i].length - 1; j >= 0; j--) {
            if (num.has(str)) {
                max = Math.max(max, str.length);
                break;
            }
            else
                str = str.slice(0, str.length - 1);
        }
    }
    return max;
};

    
