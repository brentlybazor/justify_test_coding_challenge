import prompt from 'prompt'
import { justify } from './justify'

prompt.start()

const myPrompt = () => prompt.get(["line", "length"], function (err, result:any) {
  if (!isNumber(result.length)) {
      console.log('Length must be a number')
  }
  if(isNumber(result.length)) {
    console.log('isnumber')
    console.log("Command-line input received:")
    console.log("  String to Justify: " + result.line)
    console.log("  Length: " + result.length)
    console.log(typeof result.line)

    console.log(justify(result.line, result.length))
}
console.log('-----------------------')
console.log('')
  myPrompt()
})

function isNumber(number:number) {
    return Number(number) || false
}

myPrompt()