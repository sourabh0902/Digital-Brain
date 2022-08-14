# Digital-Brain
It is an Web App which can be to used to detect the human face in an image provided by a link in the box, and the AI will detect the face by making a square around the face and it will count the number of successfull face detected. By using a database we can store login credentials of new users OR existing users.

## Features
### Front-End 
- Fully Responsive Website
- It has Front-End using `React`.
- `HTML` for text, `CSS` for the visuals and `JavaScript` to create logic and add behaviour to our front end apps.
- We used `create-react-app` that allowed us to use JS to manipulate the DOM HTML to add different information to the screen and use CSS to style the app.
- Uses an Image Recognition `API`. Clarifai API used to do machine learning image API

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
- image endpoint to update the counting of images submitted as links
  
#### Libraries for API :
- nodemon
- express
- body-parser
- cors



