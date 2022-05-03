function removeHashtag(word) {
    word = word.split("")

    while (word.indexOf("#") > -1) {

        let index = word.indexOf("#")
        if (index == 0) {
            word.splice(index, 1)
        }else{
            word.splice((index - 1), 2)
        }
        console.log(word)
    }
    return word
}
module.exports = removeHashtag