
function runProgram(input) {
    var newInput = input.split('\n');
    var k = +newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number).sort(function(a,b){return a-b});
    var arr2 = newInput[2].trim().split(" ").map(Number).sort(function(a,b){return a-b});
    var i =1;
    var j =0;
    var count =0;
    while(i<arr.length && j<arr2.length){
        if(arr[i] <= arr2[j]){
            count++;
            i++;
        }
        else{
            j++;
            count--;
        }
        if(count > k){
            console.log("Possible");
        }
    }
    console.log("Not Possible");
    // console.log(arr);
    // console.log(arr2);


}
if (process.env.USER === "mrunmayigode") {
  runProgram(`1
  1 3 5
  2 6 8`)
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