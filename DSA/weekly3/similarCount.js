
function runProgram(input) {
  var newInput = input.split("\n");
  var str = newInput[0].trim();
  var str1 = newInput[1].trim();
  console.log(str);
  console.log(str1);
    var count =0;
  function check(str,str1)
{
for(let i in str)
str1.includes(str[i])?count++:false;
console.log(count)
}
check(str,str1) 
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`AEDFHR
  ABCDGH`);
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
