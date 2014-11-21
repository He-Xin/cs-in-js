function Heap() {

    var arr = [];

    function swap(i, j) {
	var v = arr[i];
	arr[i] = arr[j];
	arr[j] = v;
    }

    function moveUp(index) {
	if (index == 0) 
	    return;
	var parent = Math.floor((index - 1) / 2);

	if (arr[parent] <= arr[index]) {
	    return;
	}
	swap(parent, index);

	moveUp(parent);
    }

    function getIndexOfChildWithSmallValue(index) {
	var childIndex1 = index * 2 + 1, childIndex2 = index * 2 + 2;
	if (childIndex1 >= arr.length) return undefined;
	if (childIndex2 >= arr.length) return childIndex1;
	
	return arr[childIndex1] < arr[childIndex2] ? childIndex1 : childIndex2;
    }

    function moveDown(index) {
	if (index >= arr.length)
	    return;

	var childIndex = getIndexOfChildWithSmallValue(index);
	
	if (childIndex === undefined) return;
	
	if (arr[index] < arr[childIndex]) return;

	swap(index, childIndex);
	
	moveDown(childIndex);
    }
    
    this.insert = function (v) {
	arr.push(v);

	var index = arr.length - 1;
	moveUp(index);
    };

    this.remove = function() {
	var v = arr[0];
	arr[0] = arr[arr.length - 1];
	arr.length = arr.length - 1;
	moveDown(0);
	return v;
    };
    
    this.print = function () {
	console.log(arr);
    }

    this.toArray = function() {
	return arr.concat();
    }
}

module.exports = Heap;
