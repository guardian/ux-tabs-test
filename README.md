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

Despite the wealth of tab components in the React ecosystem you will be expected to implement your own in order to demonstrate some of the skills required to create custom components from scratch. You may use the internet to search for any relevant information during the test if required.

There may not be enough time to complete all the requirements - this is fine!

## Considerations

While the style of the component is important, it is not the sole focus of this test. At the Guardian we try to build things to be lightweight, accessible, and usable across browsers, devices and network conditions.

We expect you to focus primarily on the below considerations.

### Accessibility

A great deal of web content can be made accessible simply by using semantically correct HTML elements and role attributes. We'd like you to ensure the component is accessible for our readers that rely on screen reading technology or keyboard navigation to access our content.

### Browser support

Our site uses modern web standards to provide the best possible reading experience for our visitors. Although we aim to be readable on all possible devices and browsers, not all are capable of running the full set of features. We'd like you to make sure your application works on older browsers as well as the latest browsers. Our [recommended browser list](https://www.theguardian.com/help/recommended-browsers) states the browsers we currently support.

### Reusability

We'd like you to consider how your code could be recomposable into new solutions whilst retaining its internal implementation details.

## Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It provides a base point for starting the test with some services in `./src/services/CAPI.js` to get the data you need from CAPI (the Guardian's Content API) and an `App` component that uses these services to fetch data and render all of the responses to the DOM. You should not need to access any other properties on the CAPI response than those already accessed in the project already (`webTitle` and `webUrl`).

## Available Scripts

In the project directory, you can run:

### Running

To run the app for the first time ensure you have either run `yarn` or `npm i` in order to download the dependencies.

After this you just need to run `yarn start` or `npm run start` to run the app.

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
