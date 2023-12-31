
// local storage
document.body.classList.add(localStorage.getItem("Dark-mode"))
document.body.classList.add(localStorage.getItem("color"))

// ===============

// let Mode = document.getElementById("Mode");
// let body = document.body

// let content = `
// <i class="material-icons Modebg" id="Mode">dark_mode</i>
// `

// Mode.addEventListener("click", () => {
//     if (body.classList.contains("Dark-mode")) {
//         body.classList.remove("Dark-mode")
//       Mode.textContent = "light_mode"
      
//       localStorage.setItem("color", "Dark-mode")
      
//     }
//     else {
//         body.classList.add("Dark-mode")
//         Mode.textContent = "dark_mode"
//     }
// }) 

// ===============================

let header = document.getElementById("header3")
let topBut = document.getElementById("topBut")


window.onscroll = () => {
    if (window.scrollY >= 900) {
        header.classList.add("shadowHoverBottomNav")
        topBut.classList.remove("nonepos")
        topBut.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior : "smooth",
            })
        }
    }
    else {
        header.classList.remove("shadowHoverBottomNav")
        topBut.classList.add("nonepos")
    }
} 

let ButtBottom = document.getElementById("ButtBottom")

ButtBottom.onclick = () => {
    window.scrollTo({
        top: 950,
        behavior: "smooth"
    })
}

// ===================================

const observe = new IntersectionObserver((observ) => {
    observ.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})
const heddinelements = document.querySelectorAll(".heddin");
heddinelements.forEach((el) => observe.observe(el));

// =======================================

let Links = document.querySelectorAll("#Links li a")

Links.forEach((li) => {
    li.addEventListener("click", (e) => {
        Links.forEach((li) => {
            li.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})

// =========================================

let section = document.querySelectorAll(".sectiony")

let currentSection = "Home";

window.addEventListener("scroll", () => {
    section.forEach(section => {
        if (window.scrollY >= section.offsetTop) {
            currentSection = section.id;
        }
    })

    Links.forEach(LinkEl => {
        if (LinkEl.href.includes(currentSection)) {
            document.querySelector(".active").classList.remove("active")
            LinkEl.classList.add("active")
        }
    })
})


// =================================

// Image Slide Porofolio 

// Get Slider Items | Array.form [ES6 Feature]
let sliderImages = Array.from(document.querySelectorAll('.swiperCont .project'));

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number Element
// var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
let paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {

  // Create The LI
  let paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('pagination').appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
let paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (let i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide++;

    theChecker();

  }

}

// Previous Slide Function
function prevSlide() {

  if (prevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide--;

    theChecker();

  }

}

// Create The Checker Function
function theChecker() {

  // Set The Slide Number

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('activeitImage');

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('activeul');

  // Check if Current Slide is The First
  if (currentSlide == 1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');

  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {

    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');

  }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  sliderImages.forEach(function (img) {

    img.classList.remove('activeitImage');

  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('activeul');

  });

}


// ============================================

let menuclick = document.getElementById("menuclick"),
  colorsmenu = document.getElementById("colorsmenu");
menuHeadlines = document.getElementById("menuHeadlines");
  
  menuclick.onclick = () => {
    menuHeadlines.classList.toggle("nonepos")
  }

// ===============================================


// Dark mode save localstorage


let toggleButt = document.getElementById("Mode");
let bodyElm = document.body

let content2 = `
<i class="material-icons Modebg" id="Mode">dark_mode</i>
`

const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode if enabled
if (isDarkMode) {
  enableDarkMode();
}

// Function to enable dark mode
function enableDarkMode() {
  bodyElm.classList.add('Dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
  bodyElm.classList.remove('Dark-mode');
  localStorage.setItem('darkMode', null);
}

// Toggle dark mode on button click
toggleButt.addEventListener('click', () => {
  if (bodyElm.classList.contains("Dark-mode")) {
    disableDarkMode();
    toggleButt.textContent = "light_mode";
  } else {
    enableDarkMode();
    toggleButt.textContent = "dark_mode";
  }
});


// ===============================================

let contact = document.getElementById("contact"), 
  buttContact = document.getElementById("buttContact"),
  Buttoncontactsmall = document.getElementById("Buttoncontactsmall")

  buttContact.onclick = () => {
    contact.classList.toggle("nonepos")
  }
  Buttoncontactsmall.onclick = () => {
    contact.classList.toggle("nonepos")
  }

// ===============================================

let colorButt = document.getElementById("color")

colorButt.onclick = () => {
    colorsmenu.classList.toggle("nonepos")
}


// ===============================================

// add active class and do color

let colors = document.querySelectorAll(".colors ul li")
let bodyEl = document.body

colors.forEach((li) => {
  li.addEventListener("click", (e) => {

    colors.forEach((li) => {
      li.classList.remove("activecolor")
    })
    e.currentTarget.classList.add("activecolor")
  })
})

let colorList = [];

for (i = 0; i <= colors.length; i++){
    colorList.push(colors[i].getAttribute("data-color"))
    colors[i].addEventListener("click", function () {
        document.body.classList.remove(...colorList)
        document.body.classList.add(this.getAttribute("data-color"))
        localStorage.setItem("color" , this.getAttribute("data-color"))
    }, false)
};






