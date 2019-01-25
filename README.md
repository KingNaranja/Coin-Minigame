# [Coin Minigame](https://github.com/KingNaranja/Coin-Minigame/) -- Compete for the Highscore!

# [Minigame-Api](https://github.com/KingNaranja/Minigame-Api)

Minigame repositories:
https://github.com/KingNaranja/Coin-Minigame 
https://github.com/KingNaranja/Minigame-Api

Links to deployed sites: 
Minigame Client: https://kingnaranja.github.io/Coin-Minigame/
Minigame API: https://aqueous-oasis-20309.herokuapp.com/

# What is it ?
A single page web application that allows users to sign-up, play a simple arcade game and try to compete against the high scores of other users.

## How it works
When a user logs in, the app fetches the leaderboard from the database as well as initializes a *Phaser* game scene. The only goal is to colect the gold coin by controlling the player with the arrow keys before running out of time. When the game time is over, the users score and highscore are sent with a PATCH request to the API. 

The game leaderboard is processed by handlebars before being appended to the DOM. The user can then remove games they have already played from the database.

Phaser is an open-source HTML5 game framework that is used to create game that will run 
on desktop and mobile. This web app makes a single Phaser scene that users can play once they are logged in.


# Technologies Used:
### Client
 * HTML / CSS
 * JavaScript
 * jQuery
 * Ajax
 * Handlebars.js
 * SASS
 * Bootstrap
 * *Phaser 3*

### API
* JavaScript
* Express
* MongoDB
* Mongoose
* Node.js

# WireFrames and Documentation

* [Wireframes](https://imgur.com/WwCCYm7) 
* [User Stories](https://imgur.com/dAujhg4)


## Planning
During my initial days of planning, I spent time outlining the MVP objectives and 
creating documentation:
 * User Stories
 * Wireframes
 * ERD
 * Reach Goals
 
 ## Problem Solving
In order to reach my initial scope for thi project I relied heavily on official documentation to research similar issues and their solutions.
Using *Phaser 3* led to issues finding up-to-date documentation as the framework recently upgraded from *Phaser 2*.

## Future
In development:
- more than one coin 
- enemy projectiles 
- in game buttons 

In the future I also plan to implement additional game scenes using Phaser's built-in scene manager. The leaderboard will then track the user's high score throughout all game levels.
