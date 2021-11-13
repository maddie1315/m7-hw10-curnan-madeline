// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
var cookies = document.cookie.split('; ')
var nameCookie = cookies.find(function(cookie) {
  return cookie.startsWith('span')
})
if (nameCookie) {
  nameSpan.textContent = nameCookie.split('=')[1]
}



formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  document.cookie = 'span=' + nameSpan.textContent + ';'

  
  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp