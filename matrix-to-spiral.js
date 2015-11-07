function matrixToSpiral() {
	var matrix = [];

	(function (pMat) {
		var ctr = 0,
		i,
		j;
		for (i = 1; i <= 5; i++) {
			var a = [];
			var str = "";
			for (var j = 0; j < 5; j++) {
				a.push(ctr + j);
				str += " " + (ctr + j);
			}
			ctr = i * j;
			matrix.push(a);
			console.log(str);
		}
	})(matrix);

	(function (pMat) {
		var xMin = -1,
		xMax = pMat.length,
		yMin = -1;
		yMax = pMat[0].length;
		var Direction = {
			right : 0,
			down : 1,
			left : 2,
			up : 3
		};
		var x = xMin + 1,
		y = yMin + 1,
		dir = Direction.right;

		var k = 0;
		while (true) {
			if (dir === Direction.right) {
				console.log(pMat[x][y++]);
			} else if (dir === Direction.down) {
				console.log(pMat[x++][y]);
			} else if (dir === Direction.left) {
				console.log(pMat[x][y--]);
			} else if (dir === Direction.up) {
				console.log(pMat[x--][y]);
			}

			if (y === yMax) {
				dir = Direction.down;
				xMin++;
				x++;
				y--;
			}
			if (x === xMax) {
				dir = Direction.left;
				yMax--;
				x--;
				y--;
			}
			if (y === yMin) {
				dir = Direction.up;
				xMax--;
				x--;
				y++;
			}
			if (x === xMin) {
				dir = Direction.right;
				yMin++;
				x++;
				y++;
			}

			if (xMin >= xMax || yMin >= yMax)
				break;
		}

	})(matrix);
}
