function addAndHanldle(n1: number, n2: number, cb:(num: number) => void){
    const result = n1 + n2;
    cb(result);
}

function printResult(r1: number){
    console.log(r1);
}

addAndHanldle(10, 20, printResult);