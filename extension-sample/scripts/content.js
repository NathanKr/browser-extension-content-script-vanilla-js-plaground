console.log("content script is loaded ....");

getPage();

async function getPage() {
  const buttonElem = document.createElement("button");
  buttonElem.innerText = "Click";
  buttonElem.style.color = "red";
  buttonElem.addEventListener("click", () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then((response) => response.json())
      .then((todos) => console.log(`todos.length : ${todos.length}`));
    alert(123);
  });
  const globalNavElem = document.getElementById("global-nav");
  if (globalNavElem.firstChild) {
    globalNavElem.insertBefore(buttonElem, globalNavElem.firstChild);
  }
}
