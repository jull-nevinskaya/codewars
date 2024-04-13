// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
//     Examples
//
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    let res = [];
    for (let word of str.split(' ')) {
        res.push(Array.from(word).reverse().join(''))
    }
    return res.join(' ');
}