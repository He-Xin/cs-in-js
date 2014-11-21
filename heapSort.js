var Heap = require('./heap');

function heapSort(arr) {
    var heap = new Heap();
    arr.forEach(function(v) {heap.insert(v)});
    
    var result = [];
    for (var i = 0, l = arr.length; i<l; i++) {
	result.push(heap.remove());
    }
    return result;
}

module.exports = heapSort;
