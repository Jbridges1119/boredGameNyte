# Bored?GameNyte
Welcome to **Bored?GameNyte!** or BGN. A multipage wep application for board game and game night enthuiasts, to help facilitate the organizing of game collections, scheduling events and making sure everyone is prepared to maximize their time together.

!["Gif of Login Page"](https://github.com/Jbridges1119/boredGameNyte/blob/master/docs/Login.gif?raw=true)
!["Gif of Profile Page"](https://github.com/Jbridges1119/boredGameNyte/blob/master/docs/Profile.gif?raw=true)
!["Gif of Game Search and Collection Pages"](https://github.com/Jbridges1119/boredGameNyte/blob/master/docs/Search-Collection.gif?raw=true)
!["Gif of GameNyte Creation Pages"](https://github.com/Jbridges1119/boredGameNyte/blob/master/docs/Create.gif?raw=true)
!["Gif of GameNyte and Game Pages"](https://github.com/Jbridges1119/boredGameNyte/blob/master/docs/Nyte-Game.gif?raw=true)

This app was built by [Kenny Moon](https://github.com/kcmoon), [Jesse Kopala](https://github.com/jdkopala), and [Jeff Bridges](https://github.com/Jbridges1119). 
## Why did we build this app?
Board gaming and board game nights have become increasingly popular over the last few years. As restrictions have lifted and people have returned to their busy lives, it has once again become difficult to organize game nights. Furtermore, for anyone who has partaken in a board game night may know the frustration that can come with learning a new game on the fly or even more so, teaching a new game to a player. Enter **Bored?GameNyte!** an app with multiple features that provide perfect solutions to all those issues and plenty more for casual fans of games or board game enthusiasts. 

## What does the app do?
#### Allows users to:
- Manage their board game collections by adding and removing games.
- Search for games using a connection to an external API.
- View details and information on a specific game.
- Connect to youtube videos to learn about specific games.
- Create new game nights, invite friends and select the games to be played from their collection. 
- Automatically send emails to invited guests when a game night is created or cancelled.
- Track who is coming amongst your invited guests.
- Select an attending status when invited to a game night.
- View all past and upcoming game nights.

## Teach Stack
#### Bored?GameNyte! was built with:
- React v17.0.0
- Node v16.16.0
- Express v4.18.1
- Postgres v2.0.0
- Axios v0.27.2
- Mailgun-js v 8.0.0
- DotENV v16.0.1
- Material UI -5.0.0
- Framer-motion v6.5.1

## Getting Started
This application requires two terminals, so please open up two terminal windows. In order to get started, please **clone** this repo.  

#### Server Side Setup 
1. In your first terminal enter the project directory and cd into the **server** director.
2. Run *npm install* to install the dependancies. 

#### Clients Side Setup
1. Enter the main project directory in the second terminal and then cd into the **clients** directory.
2. Run *npm install* to install the dependancies. 
3. Run **npm run db:reset** to seed the database. 

Your app is now ready to be launched, please run *npm start* in both terminals. The React application will be launched, but it not, please open your browser to [http://localhost:3000/](http://localhost:3000/) to view the app. 
