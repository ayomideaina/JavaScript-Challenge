const text = "30 Days of JavaScript Challenge 2024";
const animatedText = document.querySelector('.animatedText');

//array of colors
const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFCB77', '#FF9671', '#F7D716', '#BF40BF', '#FFA500', '#40E0D0', '#FF6347'];

// to split the text into individual letters and wrap each letter in a span
function splitText() {
    animatedText.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        animatedText.appendChild(span);
    }
}

function changeLetterColors() {
    const spans = document.querySelectorAll('.animatedText span');
    spans.forEach(span => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        span.style.color = randomColor;
    });
    const randomBgColor = colors[Math.floor(Math.random() * colors.length)];
    textContainer.style.backgroundColor = randomBgColor;
}

// To split the text when the page loads
splitText();

// Changes letter colors every second
setInterval(changeLetterColors, 1000);
