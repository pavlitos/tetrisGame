export default function setMatrix(rows, cols) {
	let grid = []
		for (let row = 0; row < rows; row++) {
			let currentRow = [];
			for (let col = 0; col < cols; col++) {
				currentRow.push('');
			}
			grid.push(currentRow)
		}
		return grid
}