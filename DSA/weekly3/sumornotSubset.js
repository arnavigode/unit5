function sumornot(arr, n, sum)
    {
        
        if (sum == 0)
            return true;
        if (n == 0)
            return false;
  
        if (arr[n - 1] > sum){
            return sumornot(arr, n - 1, sum);
        }
            
        else{
            return sumornot(arr, n - 1, sum)
            || sumornot(arr, n - 1, sum - arr[n - 1]);
        }
        
    }
function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    var arr = newInput[1].trim().split(" ").map(Number);
    var sum = +newInput[2];
    // console.log(arr);
    // console.log(sum);
    if (sumornot(arr, n, sum) == true){
        console.log("yes");
    }
    else{
console.log('no');
    }

}
if (process.env.USER === "mrunmayigode") {
  runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`)
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