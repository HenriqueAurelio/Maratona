function removeHashtag(word) {
    word = word.split("")

    while (word.indexOf("#") != -1) {
        let index = word.indexOf("#")
        index == 0 ? word.splice(index, 1) : word.splice((index - 1), 2)
    }
    return word
}
module.exports = removeHashtag