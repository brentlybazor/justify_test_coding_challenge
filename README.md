## Step to reproduce
1. `npm install` inside the root folder
2. run the tests `npm run test`
3. run `npm run prompt` to test you own string in the justify component
- You will be asked to give 2 inputs in side the prompt
- - Line (this is the string you want to justify)
- - Length (this is the number of spaces you want the text to fill)


Additions:
- I have added tests for the justify component
- I added a prompt component to allow you to input your own text and length in the terminal
- For the text that is longer than the length, I printed the string as normal up until the length except the last 3 characters are substituted for `...`
- I added strings of text in a separate file that the test pull from to exectute against

Additional things I could add to this program:
- Add a limit to the length number (min and max values)
- Check to make sure that lenght is not a negative number