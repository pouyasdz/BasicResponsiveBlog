const bgColor = "#F7F7FF";
const textColor = "#0F0A0A";
const textActiveColor = "#87FF65";
const borderColor = "#9381FF";
const secondaryColor = "#9381FF";

const iconList = ["instagram.svg", "facebook.svg", "dribbble.svg", "pinterest.svg"];

function getHtmlElement(element) {
  const result = document.querySelector(element);
  return result;
}

function getHtmlElementByClass(elClass) {
  const result = document.querySelector(elClass);
  return result;
}

function getHtmlElementByID(elID) {
  const result = document.querySelector(elID);
  return result;
}

// element
let body = getHtmlElement("body");
let nav = getHtmlElementByClass(".nav-bar");
let footer = getHtmlElementByClass(".footer");
let iconContainer = getHtmlElementByClass(".social-icons");
// basicColor
body.style.backgroundColor = bgColor;
nav.style.backgroundColor = secondaryColor;
footer.style.backgroundColor = textColor;


 iconList.forEach((item) => {
    iconContainer.innerHTML +=`<img src="./public/icon/${item}" alt="s" />`
})

let timeoutId = null;

function resetTimer() {
  enableScrolling()
  clearTimeout(timeoutId);
  timeoutId = setTimeout(disableScrolling, 3000);
}

function disableScrolling() {
  document.body.style.overflow = "hidden";
}


function enableScrolling() {
  document.body.style.overflow = "auto";
}



document.querySelector("body").addEventListener("click", resetTimer);
document.querySelector("body").addEventListener("mousemove", resetTimer);
document.querySelector("body").addEventListener("drag", resetTimer);
document.querySelector("body").addEventListener("touchend", resetTimer);



const apiUrl = "https://jsonplaceholder.typicode.com"

function getAllPost(){
  fetch((apiUrl + "/posts"))
  .then(res => res.json())
  .then(json => {
    [...json].map((item, index) => {
      console.log(item);
      document.querySelector(".container").innerHTML += `
      <div class="card">

        <div class="image-cover" style="background-image: url('https://source.unsplash.com/random/400x400?sig=${index}');">

        </div>

        <h3>${(item.title).substring(0, 22)}</h3>

        <p>
          ${(item.body).substring(0, 100)}
        </p>

        <button>read more ...</button>
      </div>
      `
    })
  });
}

window.getAllPost()