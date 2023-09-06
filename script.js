// Get DOM elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to add a message to the chat box
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle user input and generate bot responses
function handleUserInput() {
    const userMessage = userInput.value;

    // Check if the user input is not empty
    if (userMessage.trim() === '') {
        return;
    }

    // Add the user's message to the chat box
    addMessage(userMessage, 'user');

    // Clear the input field
    userInput.value = '';

    // Simulate a bot response (replace with your AI logic)
    const botResponse = getBotResponse(userMessage);

    // Add the bot's response to the chat box with a slight delay to simulate typing
    setTimeout(() => {
        addMessage(botResponse, 'bot');
    }, 500); // You can adjust the delay as needed
}

// Function to simulate bot responses (replace with your AI logic)
function getBotResponse(userMessage) {
    // Here, you can implement your AI logic to generate bot responses based on user input.
    const lowerCaseMessage = userMessage.toLowerCase();
    // For now, let's keep it simple and provide some predefined responses.
    // Define some keywords and their corresponding responses
    const responses = {
        'hello': 'Hello! How can I assist you?',
        'hi': 'Hello! How can I assist you?',
        'hi chatbot': 'Hello There!',
        'greetings': 'Hello! How can I assist you?',
        'how are you': 'I am just a computer program, but I am here to help you!',
        'help': 'Sure, I can help with various topics. What do you need assistance with?',
        'bye': 'Goodbye! Have a great day!',
        'name': 'I am a chatbot. You can call me ChatBOT.',
        'weather': 'I can provide you with weather information. Please specify your location.',
        'time': `I can tell you the current time. It's ${new Date().toLocaleTimeString()}.`,
        'thanks': 'You\'re welcome! If you have more questions, feel free to ask.',
        'age': 'I am a computer program, so I don\'t have an age.',
        'who are you': 'I am ChatBOT, an AI chatbot created to assist with your questions.',
    };

    // Check if any keyword is present in the user's message
    for (const keyword in responses) {
        if (lowerCaseMessage.includes(keyword)) {
            return responses[keyword];
        }
    }

    // If no keyword matches, provide a default response
    return "I'm not sure how to respond to that. Please ask me something else.";
}

// Event listener for the send button
sendButton.addEventListener('click', handleUserInput);

// Event listener for pressing Enter in the input field
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// Initial greeting from the bot
addMessage('Hello! How can I assist you?', 'bot');
