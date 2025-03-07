// to navigate to contact section when clicked on contact in header
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// htmlcss progress circular bar
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// nodejs and expressjs progress circular bar
let nodeProgress = document.querySelector(".node"),
  nodeValue = document.querySelector(".node-progress");

let nodeStartValue = 0,
  nodeEndValue = 50,
  nodespeed = 30;

let progressnode = setInterval(() => {
  nodeStartValue++;

  nodeValue.textContent = `${nodeStartValue}%`;
  nodeProgress.style.background = `conic-gradient(#20c997 ${
    nodeStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (nodeStartValue == nodeEndValue) {
    clearInterval(progressnode);
  }
}, nodespeed);

// reactjs progress circular bar
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// mongodb progress circular bar
let mongodbProgress = document.querySelector(".mongodb"),
  mongodbValue = document.querySelector(".mongodb-progress");

let mongodbStartValue = 0,
  mongodbEndValue = 30,
  mongodbspeed = 30;

let progressmongodb = setInterval(() => {
  mongodbStartValue++;

  mongodbValue.textContent = `${mongodbStartValue}%`;
  mongodbProgress.style.background = `conic-gradient(#FF6B6B ${
    mongodbStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (mongodbStartValue == mongodbEndValue) {
    clearInterval(progressmongodb);
  }
}, mongodbspeed);

// java progress circular bar
let javaProgress = document.querySelector(".java"),
  javaValue = document.querySelector(".java-progress");

let javaStartValue = 0,
  javaEndValue = 90,
  javaspeed = 30;

let progressjava = setInterval(() => {
  javaStartValue++;

  javaValue.textContent = `${javaStartValue}%`;
  javaProgress.style.background = `conic-gradient(#FF5F9E ${
    javaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javaStartValue == javaEndValue) {
    clearInterval(progressjava);
  }
}, javaspeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// adding funtionality to back to top button

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// when the user click social links it open particular site
function openLink(url) {
  window.open(url, "_blank");
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// gallery  sections
// Function to open an image in fullscreen mode
function openImage(src) {
  document.getElementById("fullscreenImage").src = src;
  document.getElementById("downloadImage").href = src;
  document.getElementById("fullscreenViewer").classList.remove("d-none");

  // Disable scrolling when image is open
  document.body.classList.add("no-scroll");
}

// Function to close the fullscreen image viewer
function closeImage() {
  document.getElementById("fullscreenViewer").classList.add("d-none");

  // Re-enable scrolling when image is closed
  document.body.classList.remove("no-scroll");
}

function openPreview(imgSrc) {
  document.getElementById("previewImg").src = imgSrc;
  document.getElementById("downloadLink").href = imgSrc;
  document.getElementById("preview").classList.remove("d-none");
}

function closePreview() {
  document.getElementById("preview").classList.add("d-none");
}
