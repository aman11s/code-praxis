// Given an array of strings. Return an array with strings which have vowels.

const fruits = ['apple', 'orange', 'mango', 'papaya'];

const isVowel = str => {
    let hasVowel = false;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            hasVowel = true;
        }
    }
    return hasVowel;
}

const result = fruits.filter(isVowel);

console.log(result);
