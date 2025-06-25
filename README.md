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


![Image](https://github.com/user-attachments/assets/0121e535-fcdf-4cbf-b764-f6aed65c6198)
![Image](https://github.com/user-attachments/assets/7573dd3e-afd0-44da-9abe-866ecbe4404e)
![Image](https://github.com/user-attachments/assets/b162a2ed-9506-4f0c-adce-64f4bf388463)
![Image](https://github.com/user-attachments/assets/41cdf1dd-906e-4f9e-9be8-5652ba2c0df3)
![Image](https://github.com/user-attachments/assets/3f7d0486-1ea9-43ac-8349-bdf425e7d3a9)
![Image](https://github.com/user-attachments/assets/e7554774-1eb5-4985-928f-44f1d336ef0a)
![Image](https://github.com/user-attachments/assets/7ae25e99-5e00-4a56-9b0b-cc03dc9f70ff)
![Image](https://github.com/user-attachments/assets/531bb2d1-8240-46c7-a21e-171d7e41a884)




