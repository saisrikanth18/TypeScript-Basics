function add(num1: number, num2: number){   //by default return type is number
    return num1 + num2;
}

function printResult(num: number) : void{    //here we can also mention :void as return type but by default return type is void
    console.log("Result: "+ num);
}

printResult(add(2, 8));

//another way of calling function
let combinedValues: (a:number, b:number) => number;

combinedValues = add;
// combinedValues = printResult;
// combinedValues = 5;

console.log(combinedValues(8, 8));