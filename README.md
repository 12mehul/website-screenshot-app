# Website Screenshot App

Website Screenshot Service

# Overview

This service offers a web application built with React that captures website screenshots based on user input. The screenshots are saved in different resolutions and stored in MongoDB along with user details. It is built using Node.js, Express, and Puppeteer.

# Features

# -> Form Fields

# -> Form Validation

All fields are marked as required.
Validation is implemented using Yup.

# -> Screenshot Capture

Upon form submission, the application captures screenshots of the entered website at three different resolutions:
1920 x 1080
1280 x 720
640 x 360
Save user details along with the captured screenshot URLs.
Fetch a list of all users and their details.

# Technologies Used

# -> Backend

Node.js
Express.js
MongoDB (via Mongoose)
Puppeteer

# -> Frontend

React.js
Formik
Yup
Axios (for API calls)
