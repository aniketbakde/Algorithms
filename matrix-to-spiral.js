function matrixToSpiral() {
	var matrix = [];
	var rows = 5,
	columns = 5;
	(function (pMat, pRows, pCols) {
		var ctr = 0,
		i,
		j;
		for (i = 1; i <= pRows; i++) {
			var a = [];
			var str = "";
			for (var j = 0; j < pCols; j++) {
				a.push(ctr + j);
				str += " " + (ctr + j);
			}
			ctr = i * j;
			matrix.push(a);
			console.log(str);
		}
	})(matrix, rows, columns);

	(function (pMat) {
		var xMin = -1,
		xMax = pMat.length,
		yMin = -1;
		yMax = pMat[0].length;
		var numElements = xMax * yMax;
		var x = 0,
		y = 0;
		var dx = 0,
		dy = 1;

		var k = 0;
		while (numElements-- > 0) {
			console.log(pMat[x][y]);
			x += dx;
			y += dy;

			if (y === yMax) {
				dx = 1;
				dy = 0;
				xMin++;
				x++;
				y--;
			}
			if (x === xMax) {
				dx = 0;
				dy = -1;
				yMax--;
				x--;
				y--;
			}
			if (y === yMin) {
				dx = -1;
				dy = 0
					xMax--;
				x--;
				y++;
			}
			if (x === xMin) {
				dx = 0;
				dy = 1;
				yMin++;
				x++;
				y++;
			}
		}

	})(matrix);
}
