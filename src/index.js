let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  let divCollect = document.querySelector('#toy-collection')
  console.log(divCollect)
  toyFormContainer.style.backgroundColor = 'white'

  //fetches
  function getToys(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys => toys.forEach(toy => renderToy(toy)))
  } 
  getToys()


  function renderToy(toy){
  //const form = document.querySelector('form')
  //const card = document.createElement('li')
  let h2 = document.createElement('h2')
  h2.innerText = toy.name

  let img = document.createElement('img')
  img.setAttribute('src', toy.image)
  img.setAttribute('class', 'toy-avatar')

  let p = document.createElement('p')
  p.innerText = `${toy.likes}`
  
  let btn = document.createElement('button')
  btn.setAttribute('class', 'like-btn')
  btn.setAttribute('id', toy.id)
  btn.innerText = "like"
  btn.addEventListener('click', () => {
    p.innerText++;
  })

  let divCard = document.createElement('div')
  divCard.setAttribute('class', 'card')
  divCard.append(h2, img, p, btn)
  divCollect.append(divCard)
}

 

  function createToy(){
  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers:{
  "Content-Type": "application/json",
  "Accept": "application/json"
},

body: JSON.stringify({
  "name": toy.name,
  "image": toy.image,
  "likes": 0
})
    
  })
  .then(res => res.json())
  .then(toyData => console.log(toyData))

  }










});
