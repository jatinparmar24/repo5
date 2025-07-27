// aura
const auraSection = document.querySelector("#aura-landing");

// Mouse trail
auraSection.addEventListener("mousemove", (e) => {
  const trail = auraSection.querySelector(".mouse-trail");
  trail.style.setProperty("--x", `${e.clientX}px`);
  trail.style.setProperty("--y", `${e.clientY}px`);
});

// Scroll to features
const startBtn = auraSection.querySelector(".aura-start-btn");
startBtn.addEventListener("click", () => {
  auraSection.querySelector(".aura-features").scrollIntoView({ behavior: "smooth" });
});

// Typing Title
const typingTitle = document.getElementById("aura-typing-title");
const titleTexts = ["Welcome to AURA", "Experience the Future", "Crafted with Intelligence"];
let titleI = 0, titleChar = 0;
function typeTitle() {
  typingTitle.innerHTML = titleTexts[titleI].substring(0, titleChar++);
  if (titleChar > titleTexts[titleI].length) {
    setTimeout(() => {
      titleChar = 0;
      titleI = (titleI + 1) % titleTexts.length;
      typeTitle();
    }, 1800);
  } else {
    setTimeout(typeTitle, 80);
  }
}
setTimeout(typeTitle, 500);

// Subtitle typing animation
const subtitle = auraSection.querySelector(".aura-hero p");
const messages = [
  "Your Futuristic AI Assistant",
  "Powered by Intelligence",
  "Designed for the Next Era"
];
let messageIndex = 0, charIndex = 0;
function typeText() {
  const currentMessage = messages[messageIndex];
  subtitle.textContent = currentMessage.substring(0, charIndex++);
  if (charIndex > currentMessage.length) {
    setTimeout(() => {
      charIndex = 0;
      messageIndex = (messageIndex + 1) % messages.length;
      typeText();
    }, 1500);
  } else {
    setTimeout(typeText, 75);
  }
}
setTimeout(typeText, 500);

// Particles
const canvas = document.getElementById("aura-particles");
const ctx = canvas.getContext("2d");
let particles = [];
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,242,254,0.3)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Hover sound effect
const hoverSound = document.getElementById("hover-sound");
document.querySelectorAll(".aura-start-btn, .aura-card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

// Animate on scroll
const animatedEls = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
});
animatedEls.forEach(el => observer.observe(el));


// aura


// sec1
const boxes = document.querySelectorAll('.color-box');
const sec1 = document.getElementById('sec1');
const history = document.getElementById('color-history');
const picker = document.getElementById('picker');
const toggle = document.getElementById('themeToggle');

// Set background color and add to history
function handleColorChange(color, skipOpacityReset = false) {
  sec1.style.background = color;

  const dot = document.createElement('div');
  dot.className = 'history-dot';
  dot.style.backgroundColor = color;
  history.appendChild(dot);

  if (history.children.length > 10) {
    history.removeChild(history.firstChild);
  }

  if (!skipOpacityReset) {
    boxes.forEach(b => b.style.opacity = '1');
  }
}

// Click on color box
boxes.forEach(box => {
  const color = box.getAttribute('data-color');
  box.style.background = `linear-gradient(to bottom, beige, ${color})`;

  box.addEventListener('click', () => {
    handleColorChange(color);
    box.style.opacity = '0';
  });
});

// Custom color picker
picker.addEventListener('change', (e) => {
  const pickedColor = e.target.value;
  handleColorChange(pickedColor);
});

// Theme toggle
toggle.addEventListener('click', () => {
  const isDark = sec1.classList.toggle('dark-theme');
  toggle.textContent = isDark ? '☀️' : '🌙';
});

// sec1

// sec 6
  const toggles = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const links = document.querySelectorAll('.nav-menu a');

  toggle.addEventListener('click', () => {
    menu.classList.toggles('show');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      menu.classList.remove('show'); 
    });
  });

// sec 6


// sec8
const flipBtn = document.getElementById("sec8-flip-btn");
const flipBackBtn = document.getElementById("sec8-flip-back-btn");
const cardInner = document.getElementById("sec8-card-inner");

flipBtn.addEventListener("click", () => {
  cardInner.classList.add("flipped");
});

flipBackBtn.addEventListener("click", () => {
  cardInner.classList.remove("flipped");
});

// sec8

// sec9

document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById("galaxyCard");
  const launchBtn = document.getElementById("launchBtn");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * -20;
    const rotateY = (x - 0.5) * 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });

  launchBtn.addEventListener("click", () => {
    alert("Mission launched! 🚀 Get ready to explore the cosmos.");
  });
});

// sec9

// sec 10
    function toggleFact() {
      const fact = document.getElementById("sec10-fact");
      fact.classList.toggle("sec10-hidden");
    }

    function toggleTheme() {
      const sec10 = document.getElementById("sec10");
      sec10.classList.toggle("sec10-dark");
      sec10.classList.toggle("sec10-light");
    }

// sec 10