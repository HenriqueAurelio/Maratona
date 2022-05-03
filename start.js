const removeHashtag = require('./functions/removeHashtag')
const joinArray = require('./functions/joinArray')
const checkEquality = require('./functions/checkEquality')

const text = process.argv.slice(2)

const firstWord = text[0]
const secondWord = text[1]

let newWord = joinArray(removeHashtag(firstWord))
let newSecondWord = joinArray(removeHashtag(secondWord))

console.log(checkEquality(newWord, newSecondWord))
