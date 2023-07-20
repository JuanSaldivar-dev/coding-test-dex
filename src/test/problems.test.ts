
import { describe, expect, it } from '@jest/globals';

import { isArrayDuplicated, findTargetIndex } from '../problems'
import { ARRAY_NULL_OR_EMPTY_MESSAGE } from "../constants"

describe("Coding Test Unit tests", function () {

    describe("Problem 1", () => {
      it("Should return true for duplicated with the array: [1,2,3,1]", () => {
        const testingArray: number[] = [1,2,3,1];
        const isDuplicated = isArrayDuplicated(testingArray);
        expect(isDuplicated).toEqual(true);
      });
      it("Should return false for duplicated with the array: [1,2,3,4]", () => {
        const testingArray: number[] = [1,2,3,4];
        const isDuplicated = isArrayDuplicated(testingArray);
        expect(isDuplicated).toEqual(false);
      });
      it("Should return true for duplicated with the array: [1,1,1,3,3,4,3,2,4,2]", () => {
        const testingArray: number[] = [1,1,1,3,3,4,3,2,4,2];
        const isDuplicated = isArrayDuplicated(testingArray);
        expect(isDuplicated).toEqual(true);
      });
      it("Should return error message of null or empty array.", () => {
        const testingArray: number[] = [];
        const isDuplicated = isArrayDuplicated(testingArray);
        expect(isDuplicated).toEqual(ARRAY_NULL_OR_EMPTY_MESSAGE);
      });
    });

    describe("Problem 2", () => {
      it("Should return the value 2, given the array: [1,3,5,6] and the target: 5", () => {
        const testingArray: number[] = [1,3,5,6];
        const testingTarget: number = 5;
        const targetIndex = findTargetIndex(testingArray, testingTarget);
        expect(targetIndex).toEqual(2);
      });
      it("Should return the value 1, given the array: [1,3,5,6] and the target: 2", () => {
        const testingArray: number[] = [1,3,5,6];
        const testingTarget: number = 2;
        const targetIndex = findTargetIndex(testingArray, testingTarget);
        expect(targetIndex).toEqual(1);
      });
      it("Should return the value 4, given the array: [1,3,5,6] and the target: 7", () => {
        const testingArray: number[] = [1,3,5,6];
        const testingTarget: number = 7;
        const targetIndex = findTargetIndex(testingArray, testingTarget);
        expect(targetIndex).toEqual(4);
      });
      it("Should return error message of null or empty array.", () => {
        const testingArray: number[] = [];
        const testingTarget: number = 10;
        const isDuplicated = findTargetIndex(testingArray,testingTarget);
        expect(isDuplicated).toEqual(ARRAY_NULL_OR_EMPTY_MESSAGE);
      });
    });

});
