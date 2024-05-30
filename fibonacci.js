{
    function fibonacci(n){
        if (n==0){
            return[]
        }else if (n==1){
            return[0]
        }else if (n==2){
            return[0,1]
        }else{
            fib_arr =[0,1]
            for(i=2; i<n; i++){
                result=fib_arr[i-1]+fib_arr[i-2]
                fib_arr.push(result)
            }
            return fib_arr    
        }
    }
    console.log(fibonacci(100))
}