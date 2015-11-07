function cloneTreeMirror() {
	var root = null;

	(function buildTree(pRoot) {
		root = new Node(1,
				new Node(2,
					new Node(4, new Node(7)),
					new Node(5,
						new Node(8),
						new Node(9))),
				new Node(3,
					new Node(6, null,
						new Node(10))));
	})(root);
	
	preOrder(root);
	console.log("################################");
	
	function mirrorTree(pRoot) {
		if (!pRoot)
			return;

		var temp = pRoot.leftChild;
		pRoot.leftChild = pRoot.rightChild;
		pRoot.rightChild = temp;

		mirrorTree(pRoot.leftChild);
		mirrorTree(pRoot.rightChild);
	};

	mirrorTree(root);
	preOrder(root);
}
