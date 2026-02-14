// Создание падающих сердечек
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Запуск сердечек каждые 300мс
setInterval(createHeart, 300);

// Функция при нажатии на кнопку
function showLove() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.style.display = 'block';

    // Создание конфетти
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 30);
    }
}

// Создание конфетти
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    const colors = ['#e91e63', '#9c27b0', '#f44336', '#ff9800', '#ffeb3b'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '50%';
    
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Инициализация - создаем несколько сердечек сразу
for (let i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 200);
}