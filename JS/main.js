let bar = document.getElementById("changefont");
let fontChange = document.getElementById("font");
fontChange.addEventListener("click", open);
let change = document.getElementById("not");
change.addEventListener("click", differFont);

function attachEvents() {
  let fontChange = document.getElementById("font");
  let change = document.getElementById("not");
  fontChange.addEventListener("click", open);
  change.addEventListener("click", differFont);
}

function open() {
  if (bar.classList.contains("open")) {
    bar.classList.toggle("open");
    bar.innerHTML = `
        <button id="font">Aa</button>
        `;
    attachEvents();
  } else {
    bar.classList.toggle("open");
    bar.innerHTML = `
        <button id="font">Aa</button>
        <div class="deafult">
            <button id="active">Default</button>
            <button id="not">Readable</button>
        </div>`;
    attachEvents();
  }
}

function differFont() {
  let change = document.getElementById("not");
  if (change.innerHTML == `Readable`) {
    bar.innerHTML = `
        <button id="font">Aa</button>
        <div class="deafult">
            <button id="not">Default</button>
            <button id="active">Readable</button>
        </div>`;
    attachEvents();
    makeFont();
  } else {
    bar.innerHTML = `
        <button id="font">Aa</button>
        <div class="deafult">
            <button id="active">Default</button>
            <button id="not">Readable</button>
        </div>`;
    attachEvents();
    takeFont();
  }
}

function makeFont() {
  let headings = document.querySelectorAll("h1");

  headings.forEach((heading) => {
    heading.classList.add("readable");
  });
}

function takeFont() {
  let headings = document.querySelectorAll("h1");

  headings.forEach((heading) => {
    heading.classList.remove("readable");
  });
}
