document.addEventListener('DOMContentLoaded',() => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const foodPairingDisplay = document.querySelector('.food-pairing')
    const beerMenu = document.getElementById("beer-menu")
   
    
 function getBeer(e) {
    e.preventDefault()
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(resp => {
        return resp.json()
    })
    .then(data => {

        console.log(data);
        const name = data[0].name
        const description = data[0].description
        const abv = data[0].abv
        const foodPairing = data[0].food_pairing
        
        randomBeer.innerText = `${name} - ${abv} abv.` 
        descriptionDisplay.innerText = description
        foodPairingDisplay.innerText = foodPairing
        data.forEach(beerPic => {createBeerImage(beerPic)
        });
    })
}

const createBeerImage = (beerPic) => {
  const img = document.createElement("img")
  img.src = beerPic.image_url
  img.alt = beerPic.name
  img.id = beerPic.id

  beerMenu.append(img)
}

 startBtn.addEventListener('click', getBeer)

})
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const articleHearts = document.querySelectorAll(".like-glyph");
function likeCallBack(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function(){
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}
}
//Fake Server
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// //DOM Render Functions
// const renderABeer = beer => {
//   //build beer
//   let img = document.createElement('beerImg')
//   img.src = beer.image;
//   img.alt = beer.name;
//   img.id = beer.id;

//   //Event Listener
//   img.addEventListener("click", handleUpdateDetail);

//   beerImg.append(img);
//   document.querySelector('#beer-pic').appendChild()
//   console.log(data);
// }

// //get data and render beer to dom
// function init() {
//   beer.forEach(beer => renderABeer(beer))
// }
// init()








