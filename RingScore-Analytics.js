/**
 * RingScore Analytics
 * -------------------
 * Evaluates weighted scores for objects placed on a layered grid.
 * The score of each object depends on its minimum distance from
 * the grid border.
 */

class RingScoreAnalytics {
    constructor(grid) {
        this.grid = grid;
        this.rows = grid.length;
        this.columns = grid[0].length;
    }

    /**
     * Returns the score of a single occupied cell.
     */
    calculateCellScore(row, column) {
        const distanceFromBorder = Math.min(
            row,
            column,
            this.rows - 1 - row,
            this.columns - 1 - column
        );

        return distanceFromBorder + 1;
    }

    /**
     * Calculates the total weighted score of the grid.
     */
    calculateTotalScore() {
        let totalScore = 0;

        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                if (this.grid[row][column] === "X") {
                    totalScore += this.calculateCellScore(row, column);
                }
            }
        }

        return totalScore;
    }
}

/* Example */

const sampleGrid = [
    "X.........",
    "..........",
    ".......X..",
    ".....X....",
    "......X...",
    "..........",
    ".........X",
    "..X.......",
    "..........",
    ".........X"
];

const analytics = new RingScoreAnalytics(sampleGrid);

console.log("Total Score:", analytics.calculateTotalScore());
