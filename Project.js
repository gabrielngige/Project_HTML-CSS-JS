// Modal elements
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

// Chat elements
const chatbox = document.getElementById('chatbox');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');

// Socket.io
const socket = io();

// Check if user is logged in
function isLoggedIn() {
  return localStorage.getItem('token') !== null;
}

// Show modal
function showModal() {
  modal.style.display = 'block';
}

// Hide modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Check login before accessing projects
function checkLogin(url) {
  if (isLoggedIn()) {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  } else {
    showModal();
  }
}

// Handle login form
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, phone, email })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      loginMessage.textContent = 'Login successful!';
      modal.style.display = 'none';
      // Redirect or refresh
      location.reload();
    } else {
      loginMessage.textContent = data.error;
    }
  } catch (error) {
    loginMessage.textContent = 'Error: ' + error.message;
  }
});

// Chat functionality
sendButton.addEventListener('click', () => {
  const message = chatInput.value;
  if (message) {
    socket.emit('chat message', message);
    chatInput.value = '';
  }
});

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});

socket.on('chat message', (msg) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Toggle chatbox
document.addEventListener('DOMContentLoaded', () => {
  // Add toggle button if needed
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
