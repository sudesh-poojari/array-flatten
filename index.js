"use strict";

class ArrayUtil {

	/**
	 * Flattens given multidimensional array to single dimension array
	 * @param {array} arrayData The array to flatten
	 *
	 **/

	flatten (arrayData) {

		if (!arrayData) {
			throw new Error("Please provide input array");
		}

		if (!Array.isArray(arrayData)) {
			throw new Error("Invalid argument expected array argument");
		}

		var flattenedArray = [], tmpFlattenedArray;
		for (var value of arrayData) {

			if (Array.isArray(value)) {
				tmpFlattenedArray = this.flatten(value);
				flattenedArray = flattenedArray.concat(tmpFlattenedArray);
				continue;
			}

			flattenedArray.push(value);
		}

		return flattenedArray;

	}
}

module.exports = new ArrayUtil();
