jest.dontMock('../heap');
jest.dontMock('../heapSort');

var heapSort = require('../heapSort');

describe('heap sort', function() {
    it('should be able to sort array', function() {
	var arr = [1,3,5,2,4,6];

	expect(heapSort(arr)).toEqual(arr.sort());
    });
});
