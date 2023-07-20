
import { isArrayOfNumbersValid } from "./utils";
import { ARRAY_NULL_OR_EMPTY_MESSAGE } from "./constants"

//Problem 1
//Given an array of numbers return a boolean, return true if any number in the array is duplicated and false if every number is unique.
//Complexity for problem 1 is: 0(n)
export function isArrayDuplicated( numbers: number[]): (boolean|string) {
    
    //Validate if the array is valid, else return an error message.
    if(isArrayOfNumbersValid(numbers)) {
        return ARRAY_NULL_OR_EMPTY_MESSAGE;
    }

    //We create a new Set with the given array (a Set only holds unique values).
    const uniqueNumbers: Set<number> = new Set(numbers);
    
    //If the size of the set is different from the length of the array that means the array had duplicated values and we return true.
    if ( uniqueNumbers.size !== numbers.length ) {
        return true;
    }

    //Else we return false.
    return false;
        
}

//Problem 2
//Given an ordered array of numbers and a defined target return a number with the position the target should be positioned.
//Complexity for problem 2 is: 0(n)
export function findTargetIndex( numbers: number[], target: number ): (number|string) {
    
    //Validate if the array is valid, else return an error message.
    if(isArrayOfNumbersValid(numbers)) {
        return ARRAY_NULL_OR_EMPTY_MESSAGE;
    }

    let targetIndex: number = 0;
    const arrayLength: number = numbers.length;
    
    //We iterate over all the array.
    for( let index: number = 0; index < arrayLength; index++ ) {
        
        //Current number in the array.
        const number: number = numbers[index];

        //If we find the exact or greater number in the array it means that either we found
        //an exact match or if the number is greater means the target should be in that 
        //position we assign the index value to it and break the iteration.
        if ( number >= target ) {
            targetIndex = index;
            break;
        }
        
        //If we come to the end of the array and the number hasn't been found means it's 
        //greater than any number, in that case the targetIndex should be the last position of the array.
        //We assign it the 'index + 1' because we initialized the variable index from the value 0;
        if ( arrayLength == index + 1 ) {
            targetIndex = index + 1;
        }      

    }

    //We return the index position that was assigned.
    return targetIndex;

}