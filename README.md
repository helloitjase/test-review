This take-home test was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started
- Clone the repo: `git clone git@github.com:monographhq/test-review.git`
- Install dependencies: `yarn`
- Make sure the app runs: `yarn start`

## Frontend Test

### Dining review app

Design Reference: [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1)

![Dining App](/app.png)

1. **Dynamic inputs** - The Preview section on the right has static placeholder text. Wire up the app so that anything typed in both the feedback and party inputs updates the preview on the right.
2. **Refactor inputs** - Depending on how you wrote the first step, you may need to refactor the update method to only use a single method (instead of two) for updating each input. Make sure you're only passing a single method to both inputs. For example:
    ```
    update() {}
    <input onChange={update}>
    <input onChange={update}>
    ```
3. **Product decision** - We're a small team at Monograph so you may be asked to make recommendations based on a feature we're building. Code from scratch, modify a library, or use a best practice idea is often a decision we're confronted with. You'll be adding an emoji selector to the form on the left. In the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1) we've added a few ideas, but we'd like to see your thinking around the best way to implement a feature which allows a user to express their emotions after dining somewhere.

    In your README doc, write a few sentences about why you might pick a certain direction. Feel free to copy the Figma file and test ideas visually. 

Emoji Product Decision: 
The Emoji input option that I am going with is the radio button input option. I am going with this option instead of the other ones for a variety reasons that I will list below. 
  1. Use on mobile: Based off of later steps, and based off of general trends regarding applications and peoples increasing mobile use. Mobile browser interface considerations are something that must be taken into account when designing and building out the functions of an application. Dropdown Selectors and Full Emoji Picker options would be more difficult to use on mobile especially if it was through a web application. 

  2. Too many options to choose from?: When considering an Emoji Picker I believe we should provide enough options for the users but not too many options. If we provided too many options it may cause indecisiveness in some users and general disinterest in using emojis if deciding on which emoji to use is taking too much time and effort. Also when a user is reading reviews if the emoji options are all over the place the users who are reading the reviews may get confused. 

  3. Consumer ease of use: When picking the emoji that they want to use for their review, the consumer should not feel fatigued from having to navigate between too many emoji choice windows and should be able to quickly determine which emoji to use with the idea they have in mind. 

Solution: I will be using radio button input option I believe this option will translate over to ease of use on both computers and mobile and when the user decides to choose an emoji they will have an easier time deciding the right emoji to use. 


4. **Add emoji selector** - Now implement your idea in code and render it on the right in the Preview section.
5. **Style preview card** - Based on the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1), add CSS styling to the Preview area. In Figma you can click the "Code" tab in the upper right to get the relevant CSS values for each element you click.
6. **Responsive styling** - Now that your Preview is looking good, we need to make the app work for mobile users. We'd like the Preview section to be on top in mobile and everything to look similar to the Figma mockup. Don't worry about tablet styling for now, this is just for mobile.
