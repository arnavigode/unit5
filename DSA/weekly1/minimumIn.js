function findMinimum(arr, low, high)
{
    while(low < high)
    {
        let mid = Math.floor(low + (high - low)/2);
        if (arr[mid] == arr[high])
            high--;
        else if(arr[mid] > arr[high])
            low = mid + 1;
        else
            high = mid;
    }
    return arr[high];
}
function runProgram(input) {
    var newInput = input.split('\n');
    var n = +newInput[0];
    var arr = newInput[1].trim().split(" ").map(Number);

    // console.log(arr);
    console.log(findMinimum(arr,0,n-1))

}
if (process.env.USER === "mrunmayigode") {
  runProgram(`10
  4 6 7 9 10 -1 0 1 2 3`)
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