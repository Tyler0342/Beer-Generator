document.addEventListener('DOMContentLoaded',() => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const foodPairingDisplay = document.querySelector('.food-pairing')
    const beerImageDisplay = document.querySelector('.beer-img')


    function getBeer(e) {
        e.preventDefault()
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(resp => {
        return resp.json()
    })
    .then(data => {

        const name = data[0].name
        const description = data[0].description
        const abv = data[0].abv
        const foodPairing = data[0].food_pairing
        const image = data.image_url.forEach(img => addImage(img))
        

        randomBeer.innerText = `${name} - ${abv} abv.` 
        descriptionDisplay.innerText = description
        foodPairingDisplay.innerText = foodPairing
        beerImageDisplay.innerText = image

    })
}
startBtn.addEventListener('click', getBeer)
})

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res=> res.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }
  
  function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
  }





