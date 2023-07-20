
export function isArrayOfNumbersValid( array: number[] ): boolean {
    
    if (!array){
        return true;
    }

    if (array.length === 0) {
        return true;
    }
    
    return false;  

}