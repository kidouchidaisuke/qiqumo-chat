const chatBox = document.getElementById('chat-box');
const input = document.getElementById('user-input');

function appendMessage(text, role) {
  const msg = document.createElement('div');
  msg.className = 'message ' + role;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const userText = input.value.trim();
  if (!userText) return;
  appendMessage(userText, 'user');
  input.value = '';

  // ダミー応答（APIキーがないため）
  setTimeout(() => {
    const reply = 'アンケート設問案を考えています…
例えば：この商品の第一印象を教えてください。';
    appendMessage(reply, 'assistant');
  }, 1000);
}