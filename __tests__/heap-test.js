jest.dontMock('../heap');

var Heap = require('../heap');

describe('heap', function() {
    it('should define heap', function() {
	expect(Heap).toBeDefined();
    });

    it('should be able to create an instance of heap', function() {
	var heap = new Heap();
	expect(heap instanceof Heap).toBeTruthy();
    });

    it('shoud be able have insert method defined', function() {
	var heap = new Heap();
	expect(heap.insert).toBeDefined();
    });

    it('should be able to insert value to heap', function() {
	var heap = new Heap();
	heap.insert(1);
	expect(heap.toArray()).toEqual([1]);
    });

    it('should maitain heap properites, e.g. H[i] < H[2i] && H[i]<H[2i+1]', function() {
	var heap = new Heap();

	[2,10,1,4,8,6].forEach(function(v) {heap.insert(v)});
	expect(heap.toArray()).toEqual([1,4,2,10,8,6]);
    });

    it('should have remove method on heap instance', function() {
	var heap = new Heap();
	expect(heap.remove).toBeDefined();
    });

    it('should be able to delete top element and maintain heap properties', function() {
	var heap = new Heap();
	heap.insert(1);
	var v = heap.remove();
	expect(v).toEqual(1);
	expect(heap.toArray()).toEqual([]);
	
	[2,10,1,4,8,6].forEach(function(v) {heap.insert(v)});
	heap.remove();
	expect(heap.toArray()).toEqual([2,4,6,10,8]);

	heap.remove();
	expect(heap.toArray()).toEqual([4,8,6,10]);

	heap.remove();
	expect(heap.toArray()).toEqual([6,8,10]);
    });
});
