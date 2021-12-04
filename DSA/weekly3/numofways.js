function fibo(n){
    var arr = [];
    arr.length = 10;
    arr.fill(0);
 
    arr[0] = arr[1] = arr[2] = 1;
    arr[3] = 2;
 
    for(var i = 4; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 3] +
        arr[i - 4];
    }
       
 
    return arr[n];

}

function runProgram(input) {
var newInput = input.split("\n");
var n = +newInput[0].trim();
// console.log(n);
 console.log(fibo(n));
}
if (process.env.USER === "mrunmayigode") {
runProgram(`5`);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}
