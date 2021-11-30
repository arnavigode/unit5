
function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    var arr = newInput[1].trim().split(" ").map(Number);

    // console.log(arr);
    console.log(findMinimum(arr,0,n-1))

}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  5
  7
  10`)
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