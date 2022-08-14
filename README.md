# Digital-Brain
It is an Web App which can be to used to detect the human face in an image provided by a link in the box, and the AI will detect the face by making a square around the face and it will count the number of successfull face detected. By using a database we can store login credentials of new users OR existing users.

  */ Back-End is attached in another repository named [digital-brain-api](https://github.com/sourabh0902/digital-brain-api) /*

## Features
### Front-End 
- Fully Responsive Website.
- It has Front-End using `React`.
- `HTML` for text, `CSS` for the visuals and `JavaScript` to create logic and add behaviour to our front end apps.
- We used `create-react-app` that allowed us to use JS to manipulate the DOM HTML to add different information to the screen and use CSS to style the app.
- Uses an Image Recognition `API`. Clarifai API used to do machine learning image API.

#### React Libraries :
- react-tilt
- react-tsparticles-js
- tachyons
- clarafai

### Back-End 
- Using `Node` and `Express` to create our server.
- Server allowed us to interact to the front end, so whenever a user logs in or a user submits a picture, our JavaScript code on the front end, our react app is going to send an HTP request to our server, to our node app that the user just signed in or the user just submitted an image in our node server, either logs us to the app or send the image information back and then send it to the front end.

### API
- Using `POSTMAN` for API testing
- Used `bcrypt-nodejs` for encrypting password when user enters
it and when it is stored in database.

#### API Design :
- Root-route
- Signin-route
- Register-route
- Profile with userID
- Image endpoint to update the counting of images submitted as links
  
#### Libraries for API :
- nodemon
- express
- body-parser
- cors

### DataBase
- It has a `database` also to store the info. about exisiting user OR the new user who registered it's details.
- Using `PostgreSQL` as database to store information. Used `Knex.js` to connecting our server to our database.
- The App is deployed on `Heroku`.

## Challenges
- While importing face-detection API from Clarifai. Beacause this API works with Create React App v4 and not with higher versions. Why? It's because CRA v5+ uses Webpack 5 as one of the dependencies, and Webpack 5 no longer lets you use the keyword process in your javascript files. So, needed to change "react-scripts" version to 4.0.2 specifically.
- While creating the Face Detection Box which will calculate the location of the face and border the detected face in an image.
- BIGGEST CHALLENGE! : I was having the lastest version of Node at the time of writing (i.e. 18.8) which is not a stable version, then it started giving me errors while typing 'npm start', then I installed LTS version of Node but then also it was not running and giving me unwanted errors, took me more than 4 days to figure out the issues, read every solution related to it and finally got some solution after many many hours.
- And other many challenges and barriers which I brainstormed and found solutions related to issues.

## Improvements
- To be extra secure not using api key in our code for server and insted using something like environmental variables.
- And many other improvements can be done.


