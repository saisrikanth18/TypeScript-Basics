function combine(input1: number | string,
                 input2: number | string, 
                 resultConversion: 'as-number' | 'as-text' ){ //these are literals or we can have string or anyothers
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number'){
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combinedAges  = combine(33, 55, 'as-number');
console.log(combinedAges);

const combinedNumbers  = combine('33', '100', 'as-number');
console.log(combinedNumbers);

const combinedNames = combine('Sai', 'Ram', 'as-text');
console.log(combinedNames);