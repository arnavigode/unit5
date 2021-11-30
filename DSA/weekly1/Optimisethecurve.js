
function findXo(a,b,c,k)
{
    let x = Number.MAX_VALUE;
   
    if (k <= c)
        return 0;
   
    let h = k - c;
    let l = 0;
   
    while (l <= h)
    {
        let m = Math.floor((l + h) / 2);
        if ((a * m * m) + (b * m) > (k - c))
        {
            x = Math.min(x, m);
            h = m - 1;
        }
        else if ((a * m * m) + (b * m) < (k - c))
            l = m + 1;
        else
            return m;
    }
   
    return x;
}
 
function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];

    var m= 1;

    for(var s=1; s<=t; s++){
        var [a, b, c, k] = newInput[m].trim().split(" ").map(Number);
        // console.log(a, b, c, k);

        // A Xo^2 + B Xo + C >= K
        
        

    }
    m++
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`2
  3 4 5 6
  2 7 6 3`)
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