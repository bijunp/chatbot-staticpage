function getVillageInfo() {
    var villageInput = document.getElementById("villageInput").value;
    if (villageInput.trim() === "") return;

    // Add logic to retrieve contact information based on the village name
    // For simplicity, let's display a console log message.
    console.log("Retrieve contact information for village: " + villageInput);
}

function toggleChat() {
    // Show/hide the chat modal
    var chatModal = new bootstrap.Modal(document.getElementById('chatModal'));
    chatModal.toggle();
}

function makeCall() {
    // Add logic for making a call
    console.log("Initiate call");
} // Function to open the call modal
function openCallModal() {
    var callModal = new bootstrap.Modal(document.getElementById('callModal'));
    callModal.show();
}

// Function to make a call

function sendMessage() {
    // Get user input
    var userInput = document.querySelector('.chat-input textarea').value;

    // Display user message
    displayMessage('sent', userInput);

    // Simulate chatbot response
    var normalizedInput = userInput.toLowerCase(); // Normalize input to lowercase for case-insensitive comparison
    if (normalizedInput.includes('hello')) {
        var chatbotResponse = 'Hi! How can I assist you?';
        displayMessage('received', chatbotResponse);
    } else {
        // Simulate a generic response for other inputs
        var genericResponse = 'Thank you for reaching out. Our team will get back to you.';
        displayMessage('received', genericResponse);
    }

    // Clear user input
    document.querySelector('.chat-input textarea').value = '';
}

document.addEventListener("DOMContentLoaded", function() {
    // Example usage:
    displayMessage('sent', 'Hello, how can I assist you today?', getCurrentTime());
    displayMessage('received', 'I have a question about your services.', getCurrentTime());
});

function displayMessage(sender, message, timestamp) {
    var chatbox = document.querySelector('.chat-messages');
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + sender;
    messageDiv.innerHTML = '<p>' + message + '</p><span class="timestamp">' + (timestamp || getCurrentTime()) + '</span>';
    chatbox.appendChild(messageDiv);
}

function getCurrentTime() {
    // Simulate getting the current time (replace with actual time logic if needed)
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    return hours + ':' + (minutes < 10 ? '0' : '') + minutes;
}

function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevents the default behavior (e.g., newline in the textarea)
        sendMessage(); // Call your sendMessage function when Enter key is pressed
    }
}

// Your client-side JavaScript code here

