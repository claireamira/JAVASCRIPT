{
    const arr = [23, 12, 15, 24, 56, 34, 58, 89]

    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 2;
    }
    console.log(arr)
}
// for (let i=0; i <=10; i++){
//  console.log("Today is Thursday")
// }
{
    // sum numbers upto n

    let n = 5
    let sum = 0

    for (let k = 0; k <= n; k++) {
        sum = sum + k;
        console.log(sum)
    }

}
{
    function getSum(n) {
        let sum = 0
        for (let k = 0; k <= n; k++) {
            sum = sum + k
        }
        return sum;
    }
    console.log(getSum(40))
}
{
    function printNum(n) {
        for (let k = 0; k <= n; k += 2) {
            console.log("The number is " + k)
        }
    }
    printNum(10)
}
//Divisible  by 5 and 10
{
    function divisbleNum(n) {
        for (k = 0; k <= n; k++) {
            if ((k % 5 == 0) || (k % 10 == 0)) {
                console.log(k)
            }
        }
    }
    divisbleNum(50)
}
//A function that takes two parameters a and e
//should return (a^e)
{
    function getPower(a, e) {
        let ans = 1
        for (let i = 1; i <= e; i++) {
            ans = ans * a
        }


        return (ans)
    }
    console.log(getPower(2, 3))
}
//arrays
{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]

    for (let i = 0; i < numbers.length; i++) {
        
    }
}
//Values of the array backwords
{
const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
let n=numbers.length-1

for (let i = n; i >=0; i++) {
    
}
}