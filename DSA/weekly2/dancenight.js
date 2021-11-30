
function runProgram(input) {
    var newInput = input.split('\n');
    var t = +newInput[0];
    
    for(var a =2; a< newInput.length; a=a+3){
        var arr = newInput[a].trim().split(" ").map(Number).sort(function(a,b){return a-b});
        var arr1 = newInput[a+1].trim().split(" ").map(Number).sort(function(a,b){return a-b});
        // console.log(arr);
        // console.log(arr1);
        var i =0;
        var j =0;
        // for(var i =0; i < arr.length; i++){
        //     for(var j =0; j< arr1.length; j++){
                while(i<arr.length && j < arr1.length){
                    if(arr[i] <= arr1[i]){
                        console.log("NO");
                        i++;
                        j++;
                        break;
                    }
                    else{
                        console.log("YES");
                        break;
                    }

                }
            // }
        // }
    }

    
    
}
if (process.env.USER === "mrunmayigode") {
  runProgram(`3
  2 8
135 101
170 125 79 159 163 65 106 146
2 8
162 92
196 143 28 37 192 5 103 154
3 3
22 117 119
96 48 127`)
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