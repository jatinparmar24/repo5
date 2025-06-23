// aura
const auraSection = document.querySelector("#aura-landing");

// Mouse trail
auraSection.addEventListener("mousemove", (e) => {
  const trail = auraSection.querySelector(".mouse-trail");
  trail.style.setProperty("--x", `${e.clientX}px`);
  trail.style.setProperty("--y", `${e.clientY}px`);
});

// Smooth scroll to features
const startBtn = auraSection.querySelector(".aura-start-btn");
startBtn.addEventListener("click", () => {
  auraSection.querySelector(".aura-features").scrollIntoView({ behavior: "smooth" });
});

// Typing animation effect for the subtitle
const subtitle = auraSection.querySelector(".aura-hero p");
const messages = [
  "Your Futuristic AI Assistant",
  "Powered by Intelligence",
  "Designed for the Next Era"
];
let messageIndex = 0;
let charIndex = 0;

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

// aura


// sec1
const red=()=>{
    let result=document.querySelector("#sec1")
    result.style.backgroundColor="red"
    let hide=document.querySelector(".div1")
    hide.style.opacity="0"
    let hide1=document.querySelector(".div2")
    hide1.style.opacity="1"
    let hide2=document.querySelector(".div3")
    hide2.style.opacity="1"
    let hide3=document.querySelector(".div4")
    hide3.style.opacity="1"
    let hide4=document.querySelector(".div5")
    hide4.style.opacity="1"
   
    
}

const blue=()=>{
    let result=document.querySelector("#sec1")
    result.style.backgroundColor="blue"
    let hide=document.querySelector(".div2")
    hide.style.opacity="0"
    let hide1=document.querySelector(".div1")
    hide1.style.opacity="1"
    let hide2=document.querySelector(".div3")
    hide2.style.opacity="1"
    let hide3=document.querySelector(".div4")
    hide3.style.opacity="1"
    let hide4=document.querySelector(".div5")
    hide4.style.opacity="1"
}

const yellow=()=>{
    let result=document.querySelector("#sec1")
    result.style.backgroundColor="yellow"
    let hide=document.querySelector(".div3")
    hide.style.opacity="0"
    let hide1=document.querySelector(".div2")
    hide1.style.opacity="1"
    let hide2=document.querySelector(".div1")
    hide2.style.opacity="1"
    let hide3=document.querySelector(".div4")
    hide3.style.opacity="1"
    let hide4=document.querySelector(".div5")
    hide4.style.opacity="1"
}

const darkgreen=()=>{
    let result=document.querySelector("#sec1")
    result.style.backgroundColor="darkgreen"
    let hide=document.querySelector(".div4")
    hide.style.opacity="0"
    let hide1=document.querySelector(".div2")
    hide1.style.opacity="1"
    let hide2=document.querySelector(".div3")
    hide2.style.opacity="1"
    let hide3=document.querySelector(".div1")
    hide3.style.opacity="1"
    let hide4=document.querySelector(".div5")
    hide4.style.opacity="1"
}

const cyan=()=>{
    let result=document.querySelector("#sec1")
    result.style.backgroundColor="cyan"
    let hide=document.querySelector(".div5")
    hide.style.opacity="0"
    let hide1=document.querySelector(".div2")
    hide1.style.opacity="1"
    let hide2=document.querySelector(".div3")
    hide2.style.opacity="1"
    let hide3=document.querySelector(".div4")
    hide3.style.opacity="1"
    let hide4=document.querySelector(".div1")
    hide4.style.opacity="1"
}
// sec1


// sec8
const flipCard = document.getElementById('flipCard');
const flipBtn = document.getElementById('flipBtn');
const flipBackBtn = document.getElementById('flipBackBtn');

flipBtn.addEventListener('click', () => {
  flipCard.classList.add('flipped');
});

flipBackBtn.addEventListener('click', () => {
  flipCard.classList.remove('flipped');
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