
# ShoppersKart - E-commerce Platform

Welcome to ShoppersKart, a modern e-commerce platform built with the MERN stack and Next.js. This platform offers a comprehensive set of features to provide a seamless shopping experience, including authentication, product management, and user interactivity.

![ShopersKart Image](https://github.com/T-pritam/shoperskart/assets/103520152/872519e6-7274-44c4-a8ab-9b39ad137331)


## Features

ShoppersKart comes packed with a wide range of features to deliver a comprehensive online shopping experience:

- ### User Authentication:
    - Login, signup, verify OTPs, reset passwords, and logout with robust security measures.
    - Password reset functionality.

- ### Product Management:

    - Browse products with search functionality.
    - Add or remove products from cart and wishlist.
    - Write, edit, and delete reviews with real-time updates reflecting on average rating, total count, and individual star percentages.
    -  Create and view order history for a clear picture of your shopping journey
    - Manage your registered email, username, and multiple addresses for a swift checkout experience.
    -  Add, adjust quantities, and view subtotals with ease in cart
- ### User Experience:
    

    - Responsive design with a modern UI/UX.
    - Seamless navigation and state management using Next.js.

## Tech Stack
### Frontend: 

- React.js (Next.js)
- Tailwind CSS
- Bootstrap
- Redux for state management
### Backend
- Node.js
- Express.js

### Database:
- MongoDB with Mongoose
### Others:

- JWT for authentication
- Nodemailer for email services


## Installation

### Prerequisites
- Node.js ( version v21.1.0 or later )
- MongoDB installed and running locally
### Clone the project
```bash
  git clone https://github.com/T-pritam/shoperskart.git
```
### Install dependencies for frontend and backend
- Navigate to the project directory
    ```bash
    cd shoperskart
    ```
- Install frontend dependencies
    ```bash
  cd frontend
  npm install
    ```
- Install backend dependencies
    ```bash
  cd backend
  npm install
    ```
### Environment Variables
- backend 
    - Create a .env file in the backend directory.
    - Add the following variables with appropriate values
    ```bash
    # Database connection string
    MONGO_URI= "mongodb://127.0.0.1:27017/EcommDB

    #Email credentials for sending password resets and OTPs
    #Email password (less secure application access)
    EMAIL= "pritamrao37@gmail.com" 
    PASSWORD= "mtevhiyextgsckza"   
    
    #frotend url
    URL = "http://localhost:3000/"  
    PORT="8000"          

    # Secret key for jwt security
    SECRET_KEY="your-secret-key"              
    ```

- frontend
    - Create a .env file in the frontend directory
    - Add the following variable:

    ```bash
    # Backend URL (adjust if needed)
    REACT_APP_BASE_URL="http://localhost:8000" 
    ```
### Data Seeding

- Navigate to the backend directory: ```cd backend```
- Run the seeding script: ```npm run seed``` ( This script executes the seed.js file within the seed subdirectory equivalent to running node seed/seed.js )

### Run both frontend and backend servers
- Navigate to frontend ```cd frontend``` and run server ```npm run dev```
- Navigate to backend ```cd backend``` and run server ```npm run dev```
## Bonus
- Don't forget to star the repository and share your feedback!✨
## Authors
 - [@T-pritam](https://github.com/T-pritam/)



    
