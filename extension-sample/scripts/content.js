
console.log('hello !!!!!');

// const divElements = document.querySelectorAll('div:is(:contains("Nathan Krasney"))');
const divElements = document.querySelectorAll('div');

console.log(`divs : ${divElements.length}`)

for (let i = 0; i < divElements.length; i++) {
    if(divElements[i].innerText.includes('Nathan Krasney')){
        console.log(divElements[i].innerText)
    }
  }
  
  console.log(document.querySelector('.scaffold-layout__sidebar').innerHTML)

  console.log('end !!!!!');
