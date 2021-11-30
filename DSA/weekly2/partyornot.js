
function runProgram(input) {
    var newInput = input.split('\n');
    var [n, c, r] = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);

    // console.log(arr);
    // console.log(n, c, r)
    var sum = 0;
    for(var i =0; i <n; i++){
        arr.sort(function(a,b){return a-b})
        // console.log(arr);
        // console.log(arr[i]);
        for(var k = 0; k < c; k++){
            sum = sum + arr[k];
        }
        if(sum <= r){
            console.log("Party");
            break;
        }
        else{
            console.log("Sad");
            break;
        }
    }
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`5 3 24
  6 4 21 20 13`)
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