
function runProgram(input) {
    var newInput = input.split('\n');
    var [n, k] = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number).sort(function(a,b){return a-b});
    samosa(arr, k)
    function samosa(arr, k){
    var sum =0;
    var count=0;
    var i =0;
    // console.log(n, " ", k);
    // console.log(arr);
    while(sum <= k){
        i= i +1;
        count = count +1
        sum = sum + arr[i];
    }
    
    console.log(count);
}
    
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`4 10
  5 4 2 4`)
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