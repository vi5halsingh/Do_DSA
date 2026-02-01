/*

Given a square matrix mat, find the sum of its diagonals. The primary diagonal includes numbers from the top-left to the bottom-right. The secondary diagonal includes numbers from the top-right to the bottom-left. If a number appears in both diagonals (which happens in the center of an odd-sized matrix), count it only once.

 * @param {number[][]} mat
 * @return {number}
 */



function diagonalSum(mat) {

    let leftSum = 0;
    let rightSum = 0;
    let total = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (i === j) {
                //  console.log("left",mat[i][j])
                leftSum += mat[i][j]
            };
            if (i + j == mat.length - 1) {
                //  console.log("right",mat[i][j])
                rightSum += mat[i][j]
            }

            if (i === j) {
                if (i + j == mat.length - 1) {
                    leftSum -= mat[i][j]
                }
            }
            total = leftSum + rightSum
        }

    }
    return total
}

module.exports = { diagonalSum };