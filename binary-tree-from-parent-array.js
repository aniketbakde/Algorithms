function binaryTreeFromParentArray() {
	var parentArr = [-1, 0, 0, 1, 1, 3, 5]
	var root = null;

	function createNode(pParentArr, pCreated, idx) {
		if (pCreated[idx])
			return;

		var node = new Node(idx);

		pCreated[idx] = node;
		if (pParentArr[idx] === -1) {
			root = node;
		} else {

			if (!pCreated[pParentArr[idx]])
				createNode(pParentArr, pCreated, pParentArr[idx]);

			var parentNode = pCreated[pParentArr[idx]];

			if (!parentNode.leftChild)
				parentNode.leftChild = node;
			else
				parentNode.rightChild = node;
		}
	}

	(function createTree(pParentArr) {
		var created = new Array(pParentArr.length);

		for (var i = 0; i < pParentArr.length; i++) {
			createNode(pParentArr, created, i);
		}
	})(parentArr);

	preOrder(root);
}
