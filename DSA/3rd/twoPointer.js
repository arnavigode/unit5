// JavaScript Program Illustrating Naive Approach to
// Find if There is a Pair in A[0..N-1] with Given Sum
 
 
 // Naive solution to find if there is a
// pair in A[0..N-1] with given sum.
 
function isPairSum(A, N, X)
{
        for (var i = 0; i < N-1; i++)
        {
            for (var j = i+1; j < N; j++)
            {
                // as equal i and j means same element
                if (i == j)
                    continue;
 
                // pair exists
                if (A[i] + A[j] == X)
                    return 1;
 
                // as the array is sorted
                if (A[i] + A[j] > X)
                    break;
            }
        }
 
        // No pair found with given sum.
        return 0;
}
 
 
     
        var arr=[ 3, 5, 9, 2, 8, 10, 11 ];
         
        // value to search
        var val = 17;
     
        // size of the array
        var arrSize = 7;
     
        // Function call
        console.log(isPairSum(arr, arrSize, val));
 