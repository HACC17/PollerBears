# Votenteer

## More Than a Voter, More Than a Volunteer

Election Day Officials assist voters, provide operational support, and ensure the integrity of the voting process. Volunteers gain first-hand knowledge and experience in the electoral process while serving their community. Your help is needed, so sign up today!

## Votenteer Features

* Registration Form:
  * Users fill in their credentials and their information is stored database for administrative use.

* Volunteer Positions:
  * Divided up into Operational Support and Precinct Positions, users can select positions based upon their qualifications and preview all the roles utilized in the electorial process

* Select a Volunteer Site:
  * Upon selection of position, users can either select a volunteer site on a displayed map or from a dropdown menu. Either option will send a confirmation email to the user. You are also able to share that you're volunteering! Have you friends join you too!

## Votenteer Features

Technologies Used: React, Redux, MongoDb, Leaflet

## [Site Walkthrough](testing)

When first accessing the site the user is presented with this landing page. It contains links to the registration page, contact page, and FAQ in the footer.

![Image](/screenshots/landing-page.png)

### Registration
After selecting "Register Now", the user is presented with the registration form.

![Image](/screenshots/registration-form.png)

As the user scrolls down, they are able to see the Operational Support Positions and the Precinct Positions.

![Image](/screenshots/positions.png)

### Map
Upon selection of position, the map renders the locations of the position trainings

![Image](/screenshots/map.png)

### Sharing
When selecting a marker and an available time, an option for sharing to email, social media accounts, and  calendar, becomes available.

![Image](/screenshots/sharing.png)

### Email
![Image](/screenshots/email.png)

## Developers Guide

* To run this application, you must first have [Node](https://nodejs.org/en/) installed on your machine. 
* Fork this project on https://github.com/HACC17/PollerBears
* Clone the project to your machine with:

1. ```git clone https://github.com/HACC17/PollerBears.git```
2. ```npm install```

* Run the application locally with:
1. ```mongod```
2. ```mongo```
3. ```nodemon server.js```
4. ```node dbSetup.js```
5. ```npm run start```

* Open the site on `localhost:3000` from any browser.
