function removeHashtag(word) {
    word = word.split("")

    while (word.indexOf("#") > -1) {
        let index = word.indexOf("#")
        word.splice((index - 1), 2)
    }
    return word
}

module.exports = removeHashtag