const boxContainer = document.querySelector('.boxContainer');
const resumeBtn = document.querySelector('.resumebtn');
const resumeBtn2 = document.querySelector('.resumebtn2');
resumeBtn2.classList.add('hidden');

const projectOnPc = document.querySelector('.projectsOnPc');
const projectOnPh = document.querySelector('.projectsOnPh');

const projectsTitle = document.querySelector('.projectsTitle');
const phones = document.querySelectorAll('.phone');
const laptop = document.querySelectorAll('.laptop');

const col1 = document.querySelector('.col1');
const col2 = document.querySelector('.col2');
const col3 = document.querySelector('.col3');
const col4 = document.querySelector('.col4');

const sidemenu = document.getElementById('sidemenu');

let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove('active-link');
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

function openmenu() {
  sidemenu.style.right = 0;
}

function closemenu() {
  sidemenu.style.right = -200;
}

window.addEventListener('scroll', () => {
  sidemenu.style.right = -200;

  let offsetY = window.scrollY;

  console.log(offsetY);

  if (offsetY >= 800) {
    resumeBtn2.classList.remove('hidden');
  }

  if (offsetY < 800) {
    resumeBtn2.classList.add('hidden');
  }

  laptop[0].style.transform = `translateX(calc(530vh - ${offsetY}px))`;
  laptop[1].style.transform = `translateX(calc(620vh - ${offsetY}px))`;
  laptop[2].style.transform = `translateX(calc(730vh - ${offsetY}px))`;
  laptop[3].style.transform = `translateX(calc(830vh - ${offsetY}px))`;
  laptop[4].style.transform = `translateX(calc(940vh - ${offsetY}px))`;

  col1.style.transform = `translateY(calc(300vh - ${offsetY}px))`;
  col2.style.transform = `translateY(calc(300vh - ${offsetY}px))`;
  col3.style.transform = `translateY(calc(300vh - ${offsetY}px))`;
  col4.style.transform = `translateY(calc(300vh - ${offsetY}px))`;
});

(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;
    // let myHeight = window.innerHeight;

    console.log(`${myWidth}`);
    if (myWidth <= 550) {
      projectOnPc.classList.add('hidden');
      projectOnPh.classList.remove('hidden');
    }
    if (myWidth > 550) {
      projectOnPc.classList.remove('hidden');
      projectOnPh.classList.add('hidden');
    }
  }
})();
