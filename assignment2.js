{
    function vowelCounter(str) {
        const vowels = "aeiouAEIOU"
        let count = 0
    
        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }
    console.log(vowelCounter("Amira"))
    console.log(vowelCounter("Penelope Featherington"))
}