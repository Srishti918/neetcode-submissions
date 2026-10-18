class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let num = board[row][col];

            if (num === ".") continue;

            // Identify the 3 x 3 box
            let boxIndex =
                Math.floor(row / 3) * 3 + Math.floor(col / 3);

            // Check for duplicates
            if (
                rows[row].has(num) ||
                cols[col].has(num) ||
                boxes[boxIndex].has(num)
            ) {
                return false;
            }

            // Record the digit
            rows[row].add(num);
            cols[col].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;

    }
}
