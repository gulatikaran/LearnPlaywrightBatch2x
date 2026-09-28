let matrix_2D = [
    [1, 2, 3, 4]
];
console.log(matrix_2D.length); // 1 bcoz Row is 1 so the length is 1.
console.log(matrix_2D[0].length); // 4 becoz Columns in first row are 4 so the matrix_2D[0].length is 4.
//console.log(matrix_2D[1].length); // This will result in undefined since there is no second row.

// R - 1
// C - 4
// 1x4

// It is called these same rows and same column. - Grid


let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(grid.length); // 3 becoz Row is 3 so the length is 3.
console.log(grid[0].length); // 3 becoz Columns in first row are 3 so the grid[0].length is 3.
console.log(grid[1].length); // 3 becoz Columns in second row are 3 so the grid[1].length is 3.
console.log(grid[2].length); // 3 becoz Columns in third row are 3 so the grid[2].length is 3.

console.log(grid[0][0]); // 10
console.log(grid[0][2]); // 30

// R - 3
// C - 3
// 3x3 
