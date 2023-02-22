# *Hangman Project* 

<img align="center" width="550" alt="Captura de Tela 2023-02-22 às 10 23 29" src="https://user-images.githubusercontent.com/95102911/220632528-81dce034-4f04-4342-930b-b0a12f6db0dd.png">

<img align="center" width="550" alt="Captura de Tela 2023-02-22 às 10 26 03" src="https://user-images.githubusercontent.com/95102911/220633073-a3c7411b-b7d0-4df9-81bd-7ff3bde396df.png">

<img align="center" width="550" alt="Captura de Tela 2023-02-22 às 10 27 33" src="https://user-images.githubusercontent.com/95102911/220633421-99284e40-e600-4146-828b-b6da9813614e.png">

<img align="center" width="550" alt="Captura de Tela 2023-02-22 às 10 39 24" src="https://user-images.githubusercontent.com/95102911/220636115-782aa2ed-bf01-473e-aa81-d99387ab5737.png">

____

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

______

## ✅ *Requirements*

- Componentization
     - [ ] Your game should have 3 components:
         - [ ] `App` (will call the other components)
         - [ ] `Game` (Gallows image, start button, game word)
         - [ ] `Letters` (set of buttons with the letters)
- Pre-game
     - [ ] Create a file called `palavras.js` and place it inside the `src` folder (the name and location need to be these or the evaluation will fail!).
     - [ ] Inside the file, insert the available array of words.
- This array has strings that will be the words that the player must guess. You must import this array into the `App` component to use it.
- You must not change the array name nor the export! But if you want to change the content to add words, feel free! 😄
- Leave only the words in this file. **Do not export or implement anything else in the file** (like a function to choose a word, for example) as the file could be overwritten during the automatic evaluation.
- [ ] Letter buttons must be mapped via an alphabet array
- [ ] Before the game starts, input and letter buttons must be disabled.
     - Disabled buttons **must** have the `disabled` attribute in the HTML.
- By pressing “Choose Word”
     - [ ] Letters become enabled.
     - [ ] The error count at this point is 0, the empty gallows image is shown.
     - [ ] You must draw one of the words from the array that is in the `palavras.js` file for the user to try to guess.
     - [ ] The word to be guessed appears on the screen, with an *underline* ( `_` ) for each letter that the word has.
- By pressing a letter
     - [ ] The button of a letter already clicked must be disabled.
     - [ ] If the word chosen in the game has the letter that the user pressed:
         - [ ] The *underscore* of the position corresponding to the letter must be replaced by the letter itself.
         - [ ] The available words don't have special characters, so you don't have to worry about that!
     - [ ] If the word chosen in the game does NOT have the letter that the user pressed:
         - [ ] Your error count should increase.
         - [ ] The gallows image must change (forca0 > gallows1 > gallows2… and so on).
- End of the game
     - [ ] Letter buttons must be disabled.
     - [ ] If the user wins:
         - [ ] When the user wins, the complete word is in **green** and the buttons are disabled again.
         - [ ] To continue playing, the user must press the “Choose Word” button, and the game will restart from scratch.
     - [ ] If the user loses:
         - [ ] The final image that should appear is that of the hanged doll (forca6).
         - [ ] The word must be revealed, but in **red.**

## ☑️ *Bonus*

- Restart the game
     - [ ] At any time, the user can restart the game by pressing the “choose word” button.
     - [ ] A new word is drawn.
     - The game should return to the initial state (0 errors, initial image of the gallows, word only with lines, all letter buttons enabled).
- Kick *Input*
     - [ ] Create a new component in your project called `Chute`. This component should have an input and a button where the user can guess the whole word if he wants to
     - [ ] When doing this, if he hits the word, he immediately wins.
         - [ ] The correct word appears complete and in green color
     - [ ] But if he misses, he immediately loses, regardless of the previous miss count. The image that should appear at this moment is that of the hanged doll (forca6).
     - [ ] The input must be disabled in two cases: before starting the game and after finishing (win or lose)
- Consider special characters
     - [ ] When the user presses a letter without an accent (eg: a) and, in the word, there is the same letter but with an accent (eg: à, á, â, ã), it must be considered as correct.
     - [ ] In addition to the accents, also consider that c and ç are equivalent.
     - If you do this challenge, replace the array of words with the new one.
