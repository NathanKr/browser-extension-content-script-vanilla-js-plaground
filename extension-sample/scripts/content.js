console.log("content script is loaded ....");

getPage();

async function getPage() {
  const elem = `
  <div>
    <dialog>
      <p>Greetings, one and all!</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
    <p>
      <button>
        Show the dialog !
      </button>
    </p>
  </div>`;

  const divElem = document.createElement("div");
  divElem.innerHTML = elem;

  const globalNavElem = document.getElementById("global-nav");
  if (globalNavElem.firstChild) {
    const newChild = globalNavElem.insertBefore(
      divElem,
      globalNavElem.firstChild
    );

    const buttonElem = newChild.querySelector("p > button");
    const dialogElem = newChild.querySelector("dialog");

    buttonElem.addEventListener("click", () => {
      dialogElem.showModal();
    });
  }
}
