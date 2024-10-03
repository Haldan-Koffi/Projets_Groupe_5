// create matrix
// add matrix
// multiply matrix
// transpose matrix 
// display matrix


//create matrix
function createMatrix(rows: number, cols: number): number[][] {
    let matrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            let value = Number(prompt(`Enter element for matrix[${i}][${j}]: `));
            matrix[i][j] = value;
        }
    }
    return matrix;
}

// this code only for check the matrix its not included 
let rows = Number(prompt("Enter number of rows for the matrix: ")); 
let cols = Number(prompt("Enter number of columns for the matrix: ")); 

let createdMatrix = createMatrix(rows, cols);

console.log("Created Matrix:", createdMatrix);
