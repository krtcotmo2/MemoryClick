# Trouble in Westeros
![alt text](https://img.shields.io/badge/uses-Node-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-React-brightgreen.svg)  ![alt text](https://img.shields.io/badge/uses-Bootstrap-blue.svg)

I followed the steps in Sterlin's post ablut getting the pages on Git hug but I kept getting errors:
Cloning into 'node_modules\gh-pages\.cache\git@github.com!krtcotmo2!MemoryClick.git'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Goolge searches did not provide any solutions. The app did get posted to my Heroku account. https://troubleinwesteros.herokuapp.com/

This interaction uses React to create an interface for a series of buttons that the user can click on. The objective is to only click each button once before repeating a click. Every time a user clicks on a button, the order of the buttons randomize.

The application has several components. The app itself which houses the main game board. The main game board has a score bar at the top, a directions button below that and a banner holder below that. 

The direction button has a conditional that changes the text of the button based on the apps state for whether directions are showing.

The banner holder holds all 12 banner components and the directions. Either the cards or directions show base on the display directions value in the state.

A modal component is used to let the user know if they have made an error or completed the exercise.

The app uses numerous states to help monitor and control items. The current and best scores are stored in the state. The array of banners is stored in the state and is randomized on each guess. An array called chosen cards tracks all cards chosen by the user, a directions showing controls the direction displays, the isOpen variable controls whether the modal is showing and a message variable allows the message of the modal to be customized  

Updated the icon of the application.
