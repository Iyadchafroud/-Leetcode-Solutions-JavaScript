/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let prevEnd = points[0][1];

    // Count the number of non-overlapping intervals
    for (let i = 1; i < points.length; ++i) {
        if (points[i][0] > prevEnd) {
            arrows++;
            prevEnd = points[i][1];
        }
    }

    return arrows
};