
function runProgram(input) {
var newInput = input.split("\n");
var n = +newInput[0].trim();
var arr = newInput[1].trim().split(" ").map(Number);
// console.log(n);
//  console.log(arr);
var ans = [];
if(arr.length == 0){
    ans.push(arr[0]);
}
// ans.push(arr[0]);
for(var i =0; i <n; i++){
    if(arr[i+1] > arr[i]){
        ans.push(arr[i])
    }
    else{
        continue;
    }
}
console.log(ans.length);
}
if (process.env.USER === "mrunmayigode") {
runProgram(`9
10 22 9 33 21 50 41 60 80`);
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



