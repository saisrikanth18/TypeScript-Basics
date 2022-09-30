type Combinable = number | string  //type aliases
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(input1: Combinable,
                input2: Combinable, 
                resultConversion: ConversionDescriptor ){
let result;
if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
result = +input1 + +input2;
} else {
result = input1.toString() + input2.toString();
}
return result;
}

const combinedAges  = combine(33, 55, 'as-number');
console.log(combinedAges);

const combinedNumbers  = combine('33', '100', 'as-number');
console.log(combinedNumbers);

const combinedNames = combine('Sai', 'Ram', 'as-text');
console.log(combinedNames);