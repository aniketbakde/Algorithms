function Node(pVal, pLeftChild, pRightChild) {
	return {
		value : pVal,
		leftChild : (pLeftChild ? pLeftChild : null),
		rightChild : (pRightChild ? pRightChild : null),
	}
};

function preOrder(pRoot) {
	if (!pRoot)
		return;

	console.log(pRoot.value);
	preOrder(pRoot.leftChild);
	preOrder(pRoot.rightChild);
};

function inOrder(pRoot) {
	if (!pRoot)
		return;

	preOrder(pRoot.leftChild);
	console.log(pRoot.value);
	preOrder(pRoot.rightChild);
};

function postOrder(pRoot) {
	if (!pRoot)
		return;

	preOrder(pRoot.leftChild);
	preOrder(pRoot.rightChild);
	console.log(pRoot.value);
};
