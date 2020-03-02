This is a Sketch document viewer. It allows you to see a Sketch document's artboards.

## Instructions

First install dependencies: `yarn`

#### Run the app
In the project directory, you can run: `yarn start`

Open [http://localhost:3000/Y8wDMsdf](http://localhost:3000/Y8wDMsdf) to view it in the browser.

Note: you can use other document Id


#### Run tests
Run the tests with: `yarn test`


## Decisions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to have a an easy kick off from a boilerplate that's not too bloated.

I've opted to use [styled-components](https://styled-components.com/) since it's what is used at Sketch and it's also the way I prefer to do styles.

Tests were made with [tesing-library](https://testing-library.com/) since it's pre-built in Create React App and it's I'm comfortable with besides having the most sensible approach to testing in my opinion.

I've not gone with Typescript for simplicity reasons and have done type checking with React's PropTypes.

I've added React Router to be able to open diffent documents form the URL;

Regarding component's architecture I've used Atomic UI.

## Future improvements

- Add media queries to the artboard's list to have better control about the number of tiles per row and to fix the  flexbox "last row orphans situation"
- Add customized loading, error and homepage screens
- Move CSS variables into a separate file
- Add teach to smaller components - I've only tested the main interactions in the Document component