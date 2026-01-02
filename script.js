document.getElementById('surpriseBtn').addEventListener('click', function() {
    const heart = document.getElementById('hiddenHeart');
    heart.classList.toggle('hidden');
    
    
    alert("I Love You So Much! ❤️");
});

const birthday = new Date(2026, 0, 4).getTime(); 

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = birthday - now;

   
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;


    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-container").innerHTML = "Happy Birthday, Ko Ko! 🎉";
    }
}, 1000);

function createBalloon() {
    const container = document.getElementById('balloon-container');
    const balloon = document.createElement('div');
    balloon.className = 'balloon';

    const leftPos = Math.floor(Math.random() * 100);
    balloon.style.left = leftPos + 'vw';

    const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#c9184a', '#800f2f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.backgroundColor = randomColor;

    const duration = Math.random() * 5 + 5; // 5s to 10s
    balloon.style.animationDuration = duration + 's';

    container.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, duration * 1000);
}

setInterval(createBalloon, 500);

