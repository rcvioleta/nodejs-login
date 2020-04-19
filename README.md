In order to start the development you need to have NodeJS runtime installed: https://nodejs.org/en/

## Configuration

1. Once done cloning the repository, make sure to run npm install on your command line to install dependencies required to run the application. 
2. Create a .env file on the root project folder to configure global variables. The variables required in .env file can be seen in .env-example file.
3. You need to create an app with facebook here: https://developers.facebook.com/. If you are having trouble setting it up you can always check the documentation or see examples online. When done creating an app, you need to add the values **FACEBOOK_APP_ID**, **FACEBOOK_APP_SECRET** and **FACEBOOK_CALLBACK_URL** to your .env file.
4. Aside from creating an app with facebook, we also need to have mongodb as our database. To find our more information on how to setup database in mongodb you can visit [this site](https://docs.atlas.mongodb.com/getting-started/) to learn more. Once done setting up a database for the project we need to provide the url for our mongodb, you can get the link to your mongodb [here](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster/) on step 4 example. Be sure to add values for **DB_USERNAME** and **DB_PASSWORD** which should live inside **.env** file. These information are available when you create a user for the mongodb database. 


## Folder Directories

- **database**
    - You can find a single file in this folder which holder the connection to your database. We require this file to **src/app.js** in order to initialize the connection.
    
- **middleware** 
    - This folder contains **auth.js** file which is responsible for checking if a user is allowed to visit a route with a condition that checks if a user is logged in or not. We are importing and using this middleware for the files inside **routes** folder. 

- **models** 
    - Here, you can create a file the corresponds to your schema. At the moment we have **user.js** for the user schema which structures how our user model should look like.

- **routes**
    - Specific route endpoints can be found here where express routes where setup. This is where we render our views and pass them data when needed to be displayed in our front-end. These files are then imported to **src/app.js** file where we can configure our app to serve them.
    
- **views**
    - As the name suggest, we can find all the front-end or view files here. This will serve the user interface of our application. 
    
**Note**: You can check all installed dependencies in **package.json** file.
