window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 10)
})

// faq
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    const answer = faq.querySelector('.question_answer p');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    const icon=faq.querySelector('.faq_icon i');
    if(icon.className === 'uil uil-plus'){
        icon.className="uil uil-minus";
    }
    else {
    icon.className = "uil uil-plus";
    }
  });
});

const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const navMenu = document.querySelector('.nav_menu');

openMenuBtn.addEventListener('click', function () {
    navMenu.classList.add('open');
});

closeMenuBtn.addEventListener('click', function () {
    navMenu.classList.remove('open');
});


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
menuBtn.addEventListener('click', () => {
    menu.style.display="flex";
    closeBtn.style.display= "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => { 
    menu.style.display = "none"; 
    closeBtn.style.display = "none";
    menuBtn.style.display= "inline-block";
}
closeBtn.addEventListener('click',closeNav)







const countElements = document.querySelectorAll('.count');


let countUpInterval;
let startTime;

const countUpObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = parseInt(target.getAttribute('data-count'), 10);
      let currentCount = 0;

      const increment = getCountIncrement(count);
      const duration = 4000; // 4 seconds
      startTime = performance.now();

      countUpInterval = setInterval(() => {
        const elapsedTime = performance.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const incrementCount = Math.floor(progress * (count / increment)) * increment;

        target.textContent = incrementCount + '+';

        if (incrementCount >= count) {
          target.textContent = count + '+';
          clearInterval(countUpInterval);
        }
      }, 10);

      observer.unobserve(target);
    }
  });
});

countElements.forEach((element) => {
  countUpObserver.observe(element);
});

function getCountIncrement(count) {
  if (count === 79000) {
    return 100;
  } else if (count === 450) {
    return 10;
  } else if (count === 26) {
    return 1;
  } else {
    return 1;
  }
}

setTimeout(() => {
  countUpInterval && clearInterval(countUpInterval);
}, 4000);
