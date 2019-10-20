/**
 * @description: 获取每个单词出现的个数,并且按出现次数降次排序
 * @param {wordList} 
 * @return: 统计完的单词
 * @author: Princeling
 */
module.exports = textString => {
    let resultDict = {},
        tempDict = {},
        sortDictKey = {}

    let precompiler_words = /[a-z]{3,}/g,
        lowerTextString = textString.toLowerCase(),
        wordList = lowerTextString.match(precompiler_words)

    for (let index = 0; index < wordList.length; index++) {
        const eachWord = wordList[index]
        if (eachWord in tempDict) {
            tempDict[eachWord]++
        }
        else {
            tempDict[eachWord] = 1
        }
    }

    // 字典排序
    sortDictKey = Object.keys(tempDict).sort((a, b) => tempDict[b] - tempDict[a])

    sortDictKey.forEach(key => {
        resultDict[key] = tempDict[key]
    });


    return resultDict
}

