const socket = io();

const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const box = document.getElementById('chat-box');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', function(msg) {
  const item = document.createElement('div');
  item.textContent = msg;
  box.appendChild(item);
  box.scrollTop = box.scrollHeight;
});
