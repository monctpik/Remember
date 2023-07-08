const findVowels = str =>{
    let count = 0
    const vowels = ['a','e','i','o','u']
    for (const letter of str.toLowerCase()) {
        if(vowels.includes(letter)){
            count++
        }
    }
    return count
}


console.log(findVowels('aaa'))

