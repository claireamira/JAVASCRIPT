
const numbers = [56, 78, 89, 90]
{
    for (let i in numbers) {
        console.log(numbers[i])
    }
    for (let number of numbers) {
        console.log(number)
    }

    function getSum(arr) {
        sum = 0
        for (let i in arr) {
            sum = sum + arr[i]
        }
        return sum
    }
    //Alternatively using for of

    function getSum(arr) {
        sum = 0
        for (let i of arr) {
            sum = sum + i
        }
    }
    console.log(getSum(numbers))
}
{
    function getMax(arr) {
         max = arr[0]

        for (let i in arr) {
            if (arr[i] > max) {
                max = arr[i]
            }  
        } return max
    }
    console.log(getMax(numbers))
}