function islandsInMatrix() {

	var matrix = [
		[1, 1, 1, 0, 1],
		[1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 0, 1],
	];

	(function (matrixParam) {
		function getIslands(pMatrix) {
			var stack = [];
			var visited = [];
			var islands = 0;

			for (var i = 0; i < pMatrix[0].length; i++)
				visited[i] = [];

			function pushToStack(i, j) {
				if (pMatrix[i]) {
					if (pMatrix[i][j] === undefined)
						return;
					if (visited[i][j])
						return;
					visited[i][j] = 1;
					if (pMatrix[i][j] === 1)
						stack.push({
							i,
							j
						});
				}
			}

			function stackNeighbors(i, j) {
				pushToStack(i - 1, j - 1);
				pushToStack(i - 1, j);
				pushToStack(i - 1, j + 1);
				pushToStack(i, j - 1);
				pushToStack(i, j);
				pushToStack(i, j + 1);
				pushToStack(i + 1, j - 1);
				pushToStack(i + 1, j);
				pushToStack(i + 1, j + 1);
			}

			function visitIsland() {
				while (stack.length > 0) {
					var index = stack.pop();
					stackNeighbors(index.i, index.j);
				}
				islands++;
			}

			for (var i = 0; i < pMatrix.length; i++) {
				for (var j = 0; j < pMatrix[i].length; j++) {
					if (visited[i][j])
						continue;

					if (pMatrix[i][j] === 1) {
						stackNeighbors(i, j);
					}

					if (stack.length > 0)
						visitIsland();
				}
			}

			return islands;
		}

		console.log(getIslands(matrixParam));
	}
		(matrix));
}
