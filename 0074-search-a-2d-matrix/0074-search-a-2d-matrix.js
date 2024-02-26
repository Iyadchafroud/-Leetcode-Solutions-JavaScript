/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
	const rows = matrix.length, cols = matrix[0].length;
	let start = 0, end = rows * cols - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2); 

		if (matrix[Math.floor(mid / cols)][mid % cols] == target) 
			return true;
	
		if (matrix[Math.floor(mid / cols)][mid % cols] < target) 
			start = mid + 1;
		
		else 
			end = mid - 1;
	}

	return false;
};