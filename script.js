function isSameType(value1, value2) {
    // Check if both values are NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }
    
    return typeof value1 === typeof value2;
}

// Examples
console.log(isSameType(1, 3));         // true
console.log(isSameType("hey", "hello"));// true
console.log(isSameType(NaN, NaN));     // true
console.log(isSameType("3", 3));       // false
