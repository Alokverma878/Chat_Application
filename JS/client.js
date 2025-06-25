const socket = io('http://localhost:8000');

// DOM elements
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.chat-box');

// Sound on incoming messages
const audio = new Audio('ding2.mp3');

// Append message to chat
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);

    // Auto scroll to bottom
    messageContainer.scrollTop = messageContainer.scrollHeight;

    // Play sound only if incoming
    if (position === 'left') {
        audio.play();
    }
};

// Ask for username and notify server
const name = prompt("Enter your name to join Mychat");
socket.emit('new-user-joined', name);

// When someone joins
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'center');
});

// When you send a message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message !== '') {
        append(`You: ${message}`, 'right');
        socket.emit('send', message);
        messageInput.value = '';
    }
});

// When you receive a message
socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
});

// When someone leaves
socket.on('left', name => {
    append(`${name} left the chat`, 'center');
});
