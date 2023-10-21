require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Setting view engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// database connection

const { connectToMongoDB } = require('./config/moongoose');
connectToMongoDB().then(() => {
    // Start your Express server
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on Port: ${PORT}`);
    });
  }).catch((err) => {
    console.error(`Failed to connect to MongoDB: ${err}`);
  });

//connecting Assets folder 
app.use("/assests", express.static(path.join(__dirname, 'assests')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// setting up routes
const router = require('./routes/routes');
app.use(router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error in running the server : ${err}`);
    } else {
        console.log(`Server is running on Port: ${PORT}`);
    }
});


