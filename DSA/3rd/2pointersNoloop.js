// Two pointer technique based solution to find
// if there is a pair in A[0..N-1] with a given sum.
function isPairSum(A, N, X)
{
 
    // represents first pointer
    var i = 0;
 
    // represents second pointer
    var j = N - 1;
 
    while (i < j) {
 
        // If we find a pair
        if (A[i] + A[j] == X)
            return true;
 
        // If sum of elements at current
        // pointers is less, we move towards
        // higher values by doing i++
        else if (A[i] + A[j] < X)
            i++;
 
        // If sum of elements at current
        // pointers is more, we move towards
        // lower values by doing j--
        else
            j--;
    }
    return false;
}
 
// Driver code
 
    // array declaration
    var arr = [ 3, 5, 9, 2, 8, 10, 11 ];
     
    // value to search
    var val = 17;
     
    // size of the array
    var arrSize =7;
     
    // Function call
    console.log(isPairSum(arr, arrSize, val));
     