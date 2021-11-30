
function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);
    // var arr2= arr.sort(function(a,b){return b-a})
    console.log(arr);
    // console.log(n);
    var cost = 0;
    var busNow = arr[0];
    // console.log(busNow);
   for(var i =0; i < n; i++){
    busNow = Math.min(busNow, arr[i]);
    cost += busNow;
   }
   console.log(cost);
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`5
  4 7 8 3 4`)
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