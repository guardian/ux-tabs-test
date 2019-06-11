# Clientside Tabs Challenge

We’d like you to complete a pair coding task to demonstrate your coding approach, how you communicate with another engineer, how you structure a solution and what you can do when you are allowed to be creative.

This exercise will take up to **one hour**. We’re interested in how you would start building a production-ready feature. One hour may not be long enough to finish, that is fine.

## The rules

We have created a simple React app and client for our content API to get you started.  When completing this challenge you are free to use any appropriate libraries.

## The exercise

Inside this repo is an incomplete component. We'd like you to update it to meet the requirements listed below.

You should implement a **tabbed component** that looks similar to the Guardian’s most recent content widget. You’ve no doubt seen one before, but just to be clear, here’s something similar to what you're aiming for:

![Screenshot of a tabbed component](/tabbed-component.png)

The component will be a numbered listing of the most recent Guardian content chosen from two sections of the site: All content and Football. Both of these sections should be represented by a tab, and be accessible to all users.

## Considerations

At the Guardian we try to build things to be lightweight, accessible, and usable across browsers, devices and network conditions.

During implementation, please focus on the below considerations.

### Accessibility

A great deal of web content can be made accessible simply by using semantically correct HTML elements and role attributes. We'd like you to ensure the component is accessible for our readers that rely on screen reading technology or keyboard navigation to access our content.

### Browser support

Our site uses modern web standards to provide the best possible reading experience for our visitors. Although we aim to be readable on all possible devices and browsers, not all are capable of running the full set of features. We'd like you to make sure your application works on older browsers as well as the latest browsers. Our [recommended browser list](https://www.theguardian.com/help/recommended-browsers) states the browsers we currently support.

### Reusability

We'd like you to consider how your code could be recomposable into new solutions whilst retaining its internal implementation details.

## Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
