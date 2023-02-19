# Frontend Mentor - Interactive rating component solution
![Design preview for the Interactive Rating coding challenge](/design/desktop-preview.jpg)

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Your challenge is to build out this interactive rating component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Evidence for the completed project meeting the challenge requirements:

view the image of my solution following the directory below:
-View the optimal layout for the app depending on their device's screen size
![Desktop View](/images/Desktop-view.png)
![Mobile View](/images/Mobile-view.png)

- See hover states for all interactive elements on the page
![Active State 1](/images/Active%20State%201.png)
![Active State 2](/images/Active%20State%202.png)
![Active State 3](/images/Active%20State%203.png)

- Select and submit a number rating
- See the "Thank you" card state after submitting a rating
![Selecting and Submitting](/images/SelectingandSubmitting.png)
!["Thank you" Card State](/images/ThankyouCardState.png)


## My process
-Html semantic Using BEM methods
-CSS Setup - Style Guide, Global Reset, Reusable Components
-JS function method, for loop method and textContent method   

### Built with
This project was created using: 
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned
To make my components work I first created variables for both of the component I created *Rating Comp* and *Thank Comp*
and using getElementByID to target both component. 
I then created an onClick event on the submit button and added a function that displays the *Thank Comp* once the submit button has been click. 

I then needed to register the ratings button, I did this by creating a for loop with an event listener that register which button is being click. 
I then grab the value of the button and replaced the paragraph in the *Thank comp* using a string literal and displaying using textContent. 

The issues I ran with during project was that when I grab the value of the button it kept grabbing the whole element instead, so when I inserted the the result in the ratingResult variable I kept getting an error that displayed [objectHTMLButton element] which is not what I wanted. 
To solve this issue, I just needed to add a value property to my buttons so that when they are clicked it provides me with an actual value and not the whole element.
I found the solution here ![Value property solutions](https://stackoverflow.com/questions/74434048/js-is-showing-object-htmlbuttonelement-onclick)

### Continued development

#### Vanilla Javascript Methods 
I need to learn more basic pattern and basic vanilla javascript in total, doing this challenges will help me do that. 
  

## Author
- Frontend Mentor - [@timothy-joseph-collado](https://www.frontendmentor.io/profile/timothy-joseph-collado)
