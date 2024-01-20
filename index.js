// Function to calculate the determinant of a 2x2 matrix
function determinant2x2(matrix) {
    // Calculate determinant and return
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

// Function to calculate the inverse of a 2x2 matrix
function inverse2x2(matrix) {
    // Calculate the determinant by calling function determinant2x2
    const det = determinant2x2(matrix);

    // Check if the matrix is not invertible or contains invalid entries
    if (det === 0 || isNaN(det)) {
        // Return an error message
        return "Matrix is not invertible or contains invalid entries!";
    }

    // Calculate the inverse determinant
    const inverseDet = 1 / det;

    // Calculate the elements of the inverse matrix using the determinant
    const result = [
        [matrix[1][1] * inverseDet, -matrix[0][1] * inverseDet],
        [-matrix[1][0] * inverseDet, matrix[0][0] * inverseDet]
    ];
    // Return the inverse matrix
    return result;
}

// Create an empty matrix using array
const matrixValues = [];
// Loop to create rows
for (let i = 0; i < 2; i++) {
    // Create an empty row using array
    const row = [];
    // Loop to read input
    for (let j = 0; j < 2; j++) {
        // Prompt user for each value of the 2x2 matrix
        const value = parseFloat(prompt(`Enter value for row ${i + 1}, column ${j + 1}:`));
        // Add input to the row array
        row.push(value);
    }
    // Add rows to the matrix array
    matrixValues.push(row);
}

// Calculate the inverse of the matrix
const inverseMatrix2x2 = inverse2x2(matrixValues);

// Display the original matrix as the console
console.log("The original matrix:", matrixValues);

// Display the inverse matrix at the console
console.log("Inverse of the matrix:", inverseMatrix2x2);
