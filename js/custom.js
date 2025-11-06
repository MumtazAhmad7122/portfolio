tsParticles.load("tsparticles", {
  particles: { number: { value: 60 }, color: { value: "#0f6db6" }, shape: { type: "circle" },
  opacity: { value: 0.5 }, size: { value: 3 }, move: { enable: true, speed: 1 },
  links: { enable: true, color: "#0f6db6", opacity: 0.4 } }
});

// Counter Animation
const counters = document.querySelectorAll('.counter-number');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = target / 100;
    if (c < target) { counter.innerText = Math.ceil(c + increment); setTimeout(updateCounter, 50); }
    else { counter.innerText = target; }
  };
  updateCounter();
});

// Portfolio Filter
const buttons = document.querySelectorAll('.tab-btn');
const cards = document.querySelectorAll('.project-card');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-category');
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category.includes(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});





// Particle Background
tsParticles.load("tsparticles", {
  particles: { number: { value: 60 }, color: { value: "#0f6db6" }, shape: { type: "circle" },
  opacity: { value: 0.5 }, size: { value: 3 }, move: { enable: true, speed: 1 },
  links: { enable: true, color: "#0f6db6", opacity: 0.4 } }
});

// Portfolio Filter Tabs
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Active button style
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      // Filter cards
      cards.forEach((card) => {
        if (category === "all" || card.dataset.category.includes(category)) {
          card.style.display = "block";
          card.style.opacity = 1;
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll("h3.fw-bold");
  counters.forEach(counter => {
    const target = +counter.textContent.replace(/\D/g,'');
    counter.textContent = '0';
    const update = () => {
      const current = +counter.textContent;
      const increment = target / 100;
      if (current < target) {
        counter.textContent = Math.ceil(current + increment) + '+';
        setTimeout(update, 30);
      } else {
        counter.textContent = target + '+';
      }
    };
    update();
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let started = false; // to trigger animation only once

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const duration = 1500; // total duration in ms
        const stepTime = Math.max(10, duration / target);
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += 1;
            counter.textContent = current + "+";
            setTimeout(updateCounter, stepTime);
          } else {
            counter.textContent = target + "+";
          }
        };
        updateCounter();
      });
    }
  }, { threshold: 0.5 }); // triggers when 50% visible

  observer.observe(document.querySelector("#counterSection"));
});

