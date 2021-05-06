let aElement = document.getElementsByClassName("sendMessage")[0];

aElement.addEventListener('click', createMessage);

function createMessage(event) {
    event.preventDefault();
    let inputUser = document.getElementsByClassName("typeMessage")[0];
    let body = document.body;    
    let pElement = document.createElement('p');
    pElement.className = 'userMessage';    
    body.appendChild(pElement);
    pElement.textContent = inputUser.value;
    inputUser.value = "";
    let checkbox = document.querySelector('.checkbox');
    if (checkbox.checked === true) {
        setTimeout(() => {
           body.removeChild(pElement);
        }, 5000);
    };
    return pElement;
};

function createBotMessage() {
    let body = document.body;    
    body.appendChild(botMessages);   
    document.getElementById("botMessages").textContent = botMessage;
};

let botMessage = function showBotMessage() {
    var messagesList = ['Hi there!', 'I\'m a Chatbot.', 'Do you wanna talk?', 'Do you have any questions?'],
        elem = document.getElementById('botMessages'), index = -2;
    return function showBotMessage() {
        if (++index < messagesList.length) {
            elem.innerHTML += messagesList[index] + '<br>';
            setInterval(arguments.callee, 6500);
        };
    } ();    
} ();

createBotMessage();