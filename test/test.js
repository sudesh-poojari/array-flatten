var chai = require('chai');
var expect = chai.expect;

var arrayFlatten = require('../index');

describe('Array Flatten', function () {

	it('Returns valid arrays', function () {

		var inputArray = [[1,2,[3]],4];
		var outputArray = arrayFlatten.flatten(inputArray);
		expect(outputArray).to.eql([1, 2, 3, 4]);

		inputArray = [];
		outputArray = arrayFlatten.flatten(inputArray);
		expect(outputArray).to.eql([]);

		inputArray = [1, 2, 3];
		outputArray = arrayFlatten.flatten(inputArray);
		expect(outputArray).to.eql([1, 2, 3]);

	});

	it('Check input validations', function () {

		expect(arrayFlatten.flatten.bind(arrayFlatten)).to.throw("Please provide input array");
		expect(arrayFlatten.flatten.bind(arrayFlatten, {})).to.throw("Invalid argument expected array argument");

	});

});