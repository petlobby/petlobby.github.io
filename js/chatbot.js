// chatbot
button = document.getElementById('send-button')
.addEventListener('click', sendMessage);

document.getElementById('user-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim(); // Trim whitespace

  if (message) {
    addMessageToChat('user-message', message);
    userInput.value = ''; // Clear input after sending
    
    // Simulate a bot response after 1 second
    setTimeout(() => {
      const botResponse = "Hello! How can I help you?";
      addMessageToChat('bot-message', botResponse);
    }, 1000);
  }
}

function addMessageToChat(type, message) {
  const chatWindow = document.getElementById('chat-window');
  const messageContainer = document.createElement('div');
  const messageElement = document.createElement('span')

  messageContainer.classList.add('message-container');
  messageElement.classList.add('chat-message', type);
  messageElement.innerText = message;

  chatWindow.appendChild(messageContainer);
  messageContainer.appendChild(messageElement)
  chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom of chat
}