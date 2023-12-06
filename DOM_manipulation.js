// Create a DOM element
const h2 = document.createElement('h2')
h2.innerText = 'This is an h2 heading'
h2.setAttribute('id', 'sub-heading')
h2.setAttribute('class', 'secondary')

// Attach the new created element to the DOM
document.body.appendChild(h2)

// Event handling
const target = document.querySelector('body')
handleClick = () => console.log('Clicked the body')
target.addEventListener('click', handleClick)

