export const justify = (line: string, length:number) => {
  let textToDisplay:string = line
  const {numberOfCharacters, stringLength, words} = getStringInfo(line)

  if(length === 0) return ""
  if(stringLength > length) textToDisplay = line.substring(0, length - 3) + "..."
  if (stringLength < length) {
      const numberOfSpacesToAdd = length - numberOfCharacters
      console.log(length, "-", stringLength, "=", numberOfSpacesToAdd)
      textToDisplay = formatString(words, numberOfSpacesToAdd)
  }
    return textToDisplay
}

const getStringInfo = (string: string) => {
    const words = string.split(/ +/)
    const numberOfWords = words.length
    const numberOfCharacters = words.reduce((len, word) => len + word.length, 0)
    const stringLength = string.length
    return {numberOfWords, numberOfCharacters, stringLength, words}
}

const formatString = (words:Array<any>, numberOfSpaces:number) => {
    let remainingSpacesToAdd = numberOfSpaces
    let formattedString = words.map((word:string, idx: number) => {
        const numberOfGaps = words.length - idx - 1;
        const spacesToAdd = Math.abs(Math.ceil(remainingSpacesToAdd / numberOfGaps)) | 0
        remainingSpacesToAdd -= spacesToAdd
        return word.padEnd(word.length + spacesToAdd)
    }).join('')
    return formattedString
}

export default justify
