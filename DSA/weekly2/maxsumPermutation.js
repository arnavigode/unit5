function MaxSumDifference(a,n)
    {
        let finalSequence = [];
        a.sort(function(a,b){return a-b;});
       
        for (let i = 0; i < n / 2; ++i) {
            finalSequence.push(a[i]);
            finalSequence.push(a[n - i - 1]);
        }
   
      
        if (n % 2 != 0)
            finalSequence.push(a[Math.floor(n/2)]);
   
        let MaximumSum = 0;

        for (let i = 0; i < n - 1; ++i) {
            MaximumSum = MaximumSum +
                  Math.abs(finalSequence[i]
                   - finalSequence[i+1]);
        }
       
 
        MaximumSum = MaximumSum +
              Math.abs(finalSequence[n-1]
                       - finalSequence[0]);
       
        return MaximumSum;
    }
     
function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number).sort(function(a,b){return a-b});
   
    // console.log(arr);
    console.log(MaxSumDifference(arr,n));

}
if (process.env.USER === "mrunmayigode") {
  runProgram(`4
  2 5 1 6`)
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