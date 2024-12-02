# Mystery Message

Mystery Message is a web application built with Next.js that allows users to create accounts and generate public links. Others can send them anonymous messages through these links.

## Features

- User authentication: Sign up, log in, and log out.
- Anonymous messaging: Create a unique public link to receive messages anonymously.

## Tech Stack

- **Frontend**: Next.js (App-Router)
- **Backend**: Next.js API Routes
- **Database**: MongoDB for storing user data and messages.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/mystery-message.git
   cd mystery-message
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   ```bash
   MONGODB_URI="your mongodb connection string"
   RESEND_API_KEY="your resend api key"
   NEXTAUTH_SECRET="your nextauth secret"
   GOOGLE_GENERATIVE_AI_API_KEY="your generative AI api key"
   ```
4. **Run the Development Server:**:
   ```bash
   npm run dev
   ```

### Notes: (Build and Run for Production)

1. **Build the Application**:<br>
   Use the following command to create an optimized production build:
   ```bash
   npm run build
   ```
2. **Start the Production Server**:<br>
   Serve the built application using
   ``bash
   npm start
