# Gabriel Ngige - Personal Website

A modern, interactive personal website showcasing my software engineering projects with user authentication, real-time chat, and collaboration features.

## 🚀 Features

### Core Website
- **Responsive Design**: Clean, modern UI built with HTML, CSS, and JavaScript
- **Project Showcase**: Display of my software development projects
- **Contact Information**: Easy access to my contact details and social links

### User Authentication System
- **Secure Login**: JWT-based authentication system
- **User Registration**: Collect and store user information (Name, Phone, Email)
- **Protected Access**: Projects require login to view and interact

### Real-Time Collaboration
- **Live Chat**: Socket.io-powered chatbox for real-time communication
- **Cross-Page Persistence**: Chat conversations maintained across all website pages
- **Collaborative Environment**: Connect with visitors and collaborators

### Backend Infrastructure
- **Node.js/Express Server**: Robust backend API
- **MongoDB Database**: Secure user data storage
- **Email Notifications**: Automated welcome emails using Nodemailer
- **Session Management**: Persistent user sessions with JWT tokens

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- JavaScript (ES6+)
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Nodemailer
- Socket.io

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or remote instance)
- Gmail account (for email notifications)

## 🚀 Getting Started

### 1. Clone and Install
```bash
cd Project_HTML-CSS-JS
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
JWT_SECRET=your-super-secret-jwt-key
MONGO_URI=mongodb://localhost:27017/personal_website
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 3. Start MongoDB
Ensure MongoDB is running on your system:
```bash
mongod
```

### 4. Run the Application
```bash
npm start
```

The website will be available at `http://localhost:3001`

## 📁 Project Structure

```
Project_HTML-CSS-JS/
├── server.js              # Main backend server
├── package.json           # Dependencies and scripts
├── Project.html           # Main website page
├── Project.js             # Frontend JavaScript logic
├── projectstyle.css       # Website styling
├── README.md              # This file
└── forex_calculator/      # Forex calculator project
    ├── server.js
    ├── package.json
    ├── public/
    │   └── index.html
    └── ...
```

## 🔐 Authentication Flow

1. **User Visits**: Access the website at `http://localhost:3001`
2. **Project Access**: Click on any project link
3. **Login Required**: Modal prompts for user information
4. **Registration**: Data stored in MongoDB, JWT token issued
5. **Email Confirmation**: Automated welcome email sent
6. **Access Granted**: User can now view projects and use chat

## 💬 Chat System

- **Real-time Communication**: Instant messaging using WebSockets
- **Persistent Sessions**: Chat history maintained during navigation
- **Simple Interface**: Fixed-position chatbox in bottom-right corner

## 📧 Email Configuration

For email notifications to work:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: [Google App Passwords](https://support.google.com/accounts/answer/185833)
3. Use the App Password in the `EMAIL_PASS` environment variable

## 🔧 Development

### Available Scripts
- `npm start` - Start the production server
- `npm run dev` - Start with nodemon for development

### API Endpoints
- `POST /api/signup` - User registration
- `POST /api/login` - User authentication
- `GET /api/projects` - Get protected project list
- `WebSocket` - Real-time chat events

## 🤝 Collaboration

This website serves as a hub for:
- Showcasing my GitHub projects
- Connecting with potential collaborators
- Real-time discussion of ongoing projects
- Professional networking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Gabriel Ngige**
- Email: gabrielngige222@gmail.com
- Phone: +254 705 247 219
- GitHub: [gabrielngige](https://github.com/gabrielngige)
- Instagram: [_G.ab.rie.l_](https://www.instagram.com/_G.ab.rie.l_)

---

Built with ❤️ by Gabriel Ngige
