function search(arr, l, h, key){
    if (l > h)
        return -1;
 
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] == key)
        return mid;
 
    if (arr[l] <= arr[mid]) {
        
        if (key >= arr[l] && key <= arr[mid])
            return search(arr, l, mid - 1, key);
     
        return search(arr, mid + 1, h, key);
    }
 
    if (key >= arr[mid] && key <= arr[h])
        return search(arr, mid + 1, h, key);
 
    return search(arr, l, mid - 1, key);
}
function runProgram(input) {
    var newInput = input.split('\n');
    var [n, k] = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);

    // console.log(arr);
    // console.log(n, k);


    console.log(search(arr, 0, n-1, k))

}
if (process.env.USER === "mrunmayigode") {
  runProgram(`5 5
  3 4 5 1 2`)
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