const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = messageInput.value;
  if (message) {
    addMessage(message);
    messageInput.value = '';
  }
});

messageInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const message = messageInput.value;
    if (message) {
      addMessage(message);
      messageInput.value = '';
    }
  }
});

function addMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerText = message;
  messageContainer.appendChild(messageElement);
  messageElement.style.animation = 'fade-in 0.5s forwards';
}