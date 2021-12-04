
function runProgram(input) {
  var newInput = input.split("\n");
  var k = +newInput[0];
  var n = +newInput[1];
  var val = newInput[2].trim().split(" ").map(Number);
  var wt = newInput[3].trim().split(" ").map(Number).sort(function(a,b){return a-b});
  var sumWt = 0;
  var sumval = 0;
  var m;
//   console.log(val, wt);
  var l =0;
  var r = n-1;

  if(wt[l] + wt[r] == k){
    sumval= sumval + val[l] + val [r]
    console.log(sumval);
  }
  else if(wt[l] + wt[r] > k){
    //   l++;
      r--;
  }
  else if(wt[l] + wt[r] < k){
      l++;
    //   r--;
  }
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`50 
    3
    60 100 120 
    10 20 30`);
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
