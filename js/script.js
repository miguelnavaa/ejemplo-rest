// Selector de idioma
document.getElementById('language-select').addEventListener('change', function() {
    if (this.value === 'en') {
        document.querySelector('h1').textContent = 'Welcome to Delicious Restaurant';
    } else {
        document.querySelector('h1').textContent = 'Bienvenido a Restaurante Delicioso';
    }
});

// Chatbot mejorado
const chatbotTrigger = document.getElementById('chatbot-trigger');
const chatbotWindow = document.getElementById('chatbot-window');
const closeChatbot = document.getElementById('close-chatbot');
const userInput = document.getElementById('user-input');
const sendMessageBtn = document.getElementById('send-message');
const chatMessages = document.getElementById('chatbot-messages');

chatbotTrigger.addEventListener('click', () => {
    chatbotWindow.style.display = 'flex';
});

closeChatbot.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Mensaje del usuario
    chatMessages.innerHTML += `
        <div class="user-message">
            <p>${message}</p>
        </div>
    `;

    // Respuesta del bot (simulada)
    setTimeout(() => {
        const botResponses = [
            "¡Claro! ¿Necesitas ayuda con reservas?",
            "Nuestro horario es de 11 AM a 10 PM.",
            "¿Quieres conocer nuestros platos especiales?"
        ];
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        
        chatMessages.innerHTML += `
            <div class="bot-message">
                <p>${randomResponse}</p>
            </div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    userInput.value = '';
}

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

sendMessageBtn.addEventListener('click', sendMessage);

// Formulario de reseñas
document.getElementById('add-review-btn').addEventListener('click', function() {
    const reviewForm = document.getElementById('review-form');
    reviewForm.style.display = reviewForm.style.display === 'none' ? 'block' : 'none';
});