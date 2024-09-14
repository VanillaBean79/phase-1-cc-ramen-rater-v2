// index.js

// Callbacks
const handleClick = (ramen) => {
  
  const imageElement = document.getElementsByClassName('detail-image')[0]
  imageElement.src = ramen.image
  
  const nameElement = document.getElementsByClassName('name')[0]
  nameElement.innerText = ramen.name

  const restElement = document.getElementsByClassName('restaurant')[0]
  restElement.innerText = ramen.restaurant

  const ratingElement = document.getElementById('rating-display')
  ratingElement.innerText = ramen.rating

  const commentElement = document.getElementById('comment-display')
commentElement.innerText = ramen.comment



  }

const addSubmitListener = () => {

  const newRamenElement = document.getElementById('new-ramen')
  newRamenElement.addEventListener('submit', (e)=>{
    e.preventDefault()

    const newName = document.getElementsByClassName('name')[0]
    newName.innerText = e.target.name.value

const newRestaurant = document.getElementsByClassName('restaurant')[0]
newRestaurant.innerText = e.target.restaurant.value

const newImageElement = document.getElementsByClassName('detail-image')[0]
newImageElement.src = e.target.image.value

// newRating is the <span> element and I want to change the innnerText.
const newRating = document.getElementById('rating-display')

// rateElement is the <input> element. This is where the number is. 
const rateElement = document.getElementById('new-rating')
newRating.innerText = rateElement.value


const commentForm = document.getElementById('comment-display')
const newComment = document.getElementById('new-comment')

commentForm.innerText = newComment.value
console.log(newComment)
})

  }


const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(ramens => {console.log(ramens)
    
    const ramenMenu = document.getElementById('ramen-menu')
    
    ramens.forEach(ramen=>{
      const ramenImg = document.createElement('img')
      ramenImg.id = 'ramen';
      ramenImg.src = ramen.image;
      ramenMenu.append(ramenImg)
      ramenImg.addEventListener('click',(e)=>{
        handleClick(ramen)

      })
      
    })
  })
};

const main = () => {
 displayRamens()
 addSubmitListener()

}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
