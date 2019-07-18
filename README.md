# [Trouble in Westeros](https://troubleinwesteros.herokuapp.com/)
![alt text](https://img.shields.io/badge/uses-Node-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-React-brightgreen.svg)  ![alt text](https://img.shields.io/badge/uses-Bootstrap-blue.svg)

## Overview
This exercise was to familiarize myself with React Components and the state within the application. I built a single component for the title bar up top, the  main square where all the "banners" are held, the banners themselves and the popup window for the directions.

The data for the app is stored in the state. It kept track of current score, the highest score, Booleans for tracking the directions visibility, the array of banners to be shown on the screen and a number array of all chosen banners.

When the user clicked on a banner, the program checked to see if the id already existed in the array of chosen items in the state. If it did, it ended the game and sent a message of war. If the id did not exist, it added it to the array, incremented the current score, updated the highest score if it was less than the current score and reshuffled the banners on the screen. If the current score matches the length of the banner array, the user won.

This interaction uses React to create an interface for a series of buttons that the user can click on. The objective is to only click each button once before repeating a click. Every time a user clicks on a button, the order of the buttons randomize.

## Components
The direction button has a conditional that changes the text of the button based on the apps state for whether directions are showing.

The banner holder holds all 12 banner components and the directions. Either the cards or directions show base on the display directions value in the state.

A modal component is used to let the user know if they have made an error or completed the exercise.

## States
The app uses numerous states to help monitor and control items. The current and best scores are stored in the state. The array of banners is stored in the state and is randomized on each guess. An array called chosen cards tracks all cards chosen by the user, a directions showing controls the direction displays, the isOpen variable controls whether the modal is showing and a message variable allows the message of the modal to be customized  

Updated the icon of the application.

[<img src="https://github.com/krtcotmo2/MemoryClick/blob/master/public/images/TroubleInWesteros.png"/>](https://troubleinwesteros.herokuapp.com/)
