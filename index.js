// Function to calculate the determinant of a 2x2 matrix
function determinant2x2(matrix) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

// Function to calculate the inverse of a 2x2 matrix
function inverse2x2(matrix) {
    // Calculate the determinant of the 2x2 matrix
    const det = determinant2x2(matrix);

    // Check if the matrix is not invertible or contains invalid entries
    if (det === 0 || isNaN(det)) {
        return "Matrix is not invertible or contains invalid entries!";
    }

    // Calculate the inverse determinant
    const inverseDet = 1 / det;

    // Calculate the elements of the inverse matrix using the determinant
    const result = [
        [matrix[1][1] * inverseDet, -matrix[0][1] * inverseDet],
        [-matrix[1][0] * inverseDet, matrix[0][0] * inverseDet]
    ];
    return result;
}

// Prompt user for each value of the 2x2 matrix
const matrixValues = [];
for (let i = 0; i < 2; i++) {
    const row = [];
    for (let j = 0; j < 2; j++) {
        const value = parseFloat(prompt(`Enter value for row ${i + 1}, column ${j + 1}:`));
        row.push(value);
    }
    matrixValues.push(row);
}

// Calculate the inverse of the matrix
const inverseMatrix2x2 = inverse2x2(matrixValues);

// Display the original matrix
console.log("The original matrix:", matrixValues);

// Display the inverse matrix
console.log("Inverse of the matrix:", inverseMatrix2x2);
