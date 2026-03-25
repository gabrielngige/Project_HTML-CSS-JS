const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const path = require('path');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/personal_website';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // For future login with password
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// JWT Middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Routes
app.post('/api/signup', async (req, res) => {
  const { fullName, phone, email } = req.body;
  if (!fullName || !phone || !email) return res.status(400).json({ error: 'All fields required' });

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const hashedPassword = await bcrypt.hash('defaultpassword', 10); // Default for now
    const user = new User({ fullName, phone, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id, email }, JWT_SECRET, { expiresIn: '24h' });

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Gabriel Ngige\'s Personal Website',
      text: `Hello ${fullName},\n\nWelcome! You can now access the projects and collaborate.\n\nBest,\nGabriel Ngige`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log(error);
      else console.log('Email sent: ' + info.response);
    });

    res.status(201).json({ token, message: 'User registered and email sent' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'User not found' });

    const token = jwt.sign({ id: user._id, email }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/api/projects', authenticateToken, (req, res) => {
  // Return list of projects
  res.json([
    { name: 'Fire Island Adventure', url: '/webpage_assignment.html' },
    { name: 'Forex Calculator', url: 'http://localhost:3000' },
    { name: 'Open-Source Contributions', url: 'https://github.com/gabrielngige' }
  ]);
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Project.html'));
});

// Socket.io for chat
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});