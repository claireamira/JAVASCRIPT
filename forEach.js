{
    const sample_array = [[34, 25, 27, 89], [32, 76, 56, 41], [12, 67, 32, 89]]

    function getSumOfElements(arr) {
        arr_sum = []
        arr.forEach((innerArr) => {
            let sum = 0
            innerArr.forEach((value) => {
                sum = sum + value
            })
            arr_sum.push(sum)
        })
        let total_sum = 0
        sum_array.forEach((element) => {
            total_sum = total_sum + element
        })
        return arr_sum
    }
    console.log(getSumOfElements(sample_array))
}