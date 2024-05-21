{
    let x = 0
    while (x <= 10) {
        console.log(x)
        x++
    }
}

{
    let x = 10
    while (x >= 0) {
        console.log(x)
        x--
    }
}
{
    const arr = [45, 56, 78, 89]
    let x = 0

    function getSum(arr) {
        sum = 0
        while (x < arr.length) {
            sum = sum + arr[x]
            x++
        }
        return sum
    }
    console.log(getSum(arr))
}