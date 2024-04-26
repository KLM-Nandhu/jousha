document.addEventListener('DOMContentLoaded', function() {
    addChatbotMessage("How may I help you!");
});

document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = document.getElementById('user-input');
    if (userInput.value.trim() !== '') {
        addUserMessage(userInput.value);
        userInput.value = ''; // Clear input box
        // Delay chatbot response
        setTimeout(function() {
            addChatbotMessage("Let me look into that for you...");
        }, 1500); // Delay of 1.5 seconds
    }
});
// Assuming other parts of your script.js remain the same

function addUserMessage(text) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = text;
    newMessage.className = 'message message-right'; // Use the CSS class for user message styling
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Modify the addChatbotMessage function to include a delay
function addChatbotMessage(text) {
    const chatBox = document.getElementById('chat-box');
    // Using a timeout to simulate delayed response
    setTimeout(() => {
        const newMessage = document.createElement('div');
        newMessage.textContent = text;
        newMessage.className = 'message message-left'; // Use the CSS class for chatbot message styling
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }, 1000); // Delay chatbot message by 1000ms (1 second)
}


document.getElementById('theme-toggle').addEventListener('click', function() {
    var body = document.body;
    body.classList.toggle('dark-theme');
    // var currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    this.textContent = currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1) + " Theme";
});
