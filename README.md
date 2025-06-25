# REAL TIME CHAT_APPLICATION

COMPANY: CODTECH IT SOLUTIONS

NAME: VERMA ALOKKUMAR AMARDAYAL

INTERN ID: CT06DF1774

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 6 WEEKS

MENTOR: NEELA SANTOSH

**LetsChat** is a realtime chat web app built using **Node.js**, **Socket.IO**, and **Vanilla JS**, enabling multiple users to communicate instantly in a shared room.
It features message broadcasting, join/leave notifications, and emoji support.


## 🚀 Features

- ✅ Real-time messaging using Socket.IO
- ✅ Join/leave notifications
- ✅ Messages display on:
  - Right side if **you** send
  - Left side if **others** send
  - Center if user joins/leaves
- ✅ Emoji support with [EmojiOneArea](https://github.com/mervick/emojionearea)
- ✅ Message notification sound
- ✅ Responsive UI and styled chat bubble design


## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Socket.IO](https://socket.io/)
- HTML, CSS, JavaScript
- [EmojiOneArea](https://github.com/mervick/emojionearea)
- Font Awesome


  ## 🧠 How It Works

- Users open the website and enter a name
- Each client connects to the Node.js server via WebSockets
- On message send:
  - Client emits `send` event
  - Server broadcasts it to all other clients via `receive`
- Join/leave events are broadcasted to update the chat feed


### 1. Clone the repository

### 2. Open folder in VS Code editor

### 3. Navigate to nodeServer folder
        cd nodeServer

### 4. Install dependencies
bash

npm install

### 5. Start the server
bash

nodemon index.js

### 6. Open index.html live server many time as you wish how many users you want to Connect realtime.


## 📸 Screenshots





